const fs = require('fs');
const esprima = require('esprima');
const escodegen = require('escodegen');
const esprima_walk = require('esprima-walk');
// String.prototype.replaceAll
const core_js = require('core-js');

let jsContent = fs.readFileSync('app.js').toString();
let program = esprima.parseScript(jsContent);

function Member(isExported, name, path, body) {
    this.isExported = isExported;
    this.name = name;
    this.path = path;
    this.body = body;
    this.fileName = pathToFileName(path);
}

function Raw(body) {
    this.body = body;
}

function pathToFileName(path) {
    path = [...path, 'code']
    return path.join('/') + '.js'
}
function divideMangledName(rawName) {
    if (!rawName.startsWith('module')) {
        return {
            name: rawName,
            path: [],
            isExported: true,
        }
    }
    var namespaced = rawName.split('$').slice(1)
    let isExported = namespaced[0] == 'exports';
    namespaced = namespaced.slice(1);
    let path = namespaced.slice(0, namespaced.length - 1);
    var name = namespaced[namespaced.length - 1]
    // Identifiers cannot begin with numbers
    if (!Number.isNaN(Number.parseInt(name[0]))) {
        name = `$n${name}`;
    }
    return {
        name: name === undefined ? namespaced[0] : name,
        path: path,
        isExported: isExported,
    }
}

let decls = program.body.filter(e => e.type != 'EmptyStatement').flatMap(e => {
    if (e.id !== undefined) {
        let nameInfo = divideMangledName(e.id.name);
        // Remove the namespace from the name
        e.id.name = nameInfo.name
        return [new Member(nameInfo.isExported, nameInfo.name, nameInfo.path, e)]
    }
    if (e.type == 'VariableDeclaration') {
        return e.declarations.map(decl => {
            try {
                let nameInfo = divideMangledName(decl.id.name);
                // Remove the namespace from the name
                decl.id.name = nameInfo.name
                let newDecl = {
                    type: 'VariableDeclaration',
                    kind: e.kind,
                    declarations: [decl]
                }
                return new Member(nameInfo.isExported, nameInfo.name, nameInfo.path, newDecl);
            } catch (error) {
                console.log([error, decl, e]);
                return null
            }
        }).filter(e => e !== null);
    }
    return [new Raw(e)];
})


let members = decls.filter(e => e instanceof Member);
const useStrict = {
    "type": "ExpressionStatement",
    "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "'use strict'"
    },
    "directive": "use strict"
};
let files = new Map();
members.forEach(e => {
    var result = putIfAbsent(files, e.fileName, _ => new Result(e.path, e.fileName));
    result.decls.push(e.body)
});

let ignored = decls.filter(e => e instanceof Raw);
let ignoredProgram = putIfAbsent(files, 'ignored.js', _ => new Result([], 'ignored.js'))
ignored.forEach(e => {
    ignoredProgram.decls.push(e.body);
})

// An compilation unit which will be built from the analyzed code
function Result(path, fileName) {
    let decls = [useStrict]
    this.path = path;
    this.filePath = fileName;
    this.decls = decls;
    this.program = {
        type: "Program",
        body: decls,
        sourceType: "script"
    };
    this.importedModules = new Set();
    this.addImport = (module, path) => {
        if (this.importedModules.has(module)) {
            return;
        }
        this.importedModules.add(module);
        if (path === undefined) {
            path = module;
        }
        let importStatement = {
            type: "VariableDeclaration",
            declarations: [
                {
                    type: "VariableDeclarator",
                    id: {
                        type: "Identifier",
                        name: module
                    },
                    init: {
                        type: "CallExpression",
                        callee: {
                            type: "Identifier",
                            name: "require"
                        },
                        arguments: [
                            {
                                type: "Literal",
                                value: path,
                                raw: `'${path}'`
                            }
                        ]
                    }
                }
            ],
            kind: "const"
        };
        decls.splice(1, 0, importStatement)
    };
}

/*
 * Array and Map utils
 */

function zip(a, b) {
    let len = Math.min(a.length, b.length)
    let result = new Array(len);
    for (var i = 0; i < len; i++) {
        result[i] = { left: a[i], right: b[i] }
    }
    return result
}

function takeWhile(arr, pred) {
    let result = []
    for (var i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (!pred(item)) {
            break;
        }
        result.push(item)
    }
    return result;
}

function putIfAbsent(map, key, create) {
    if (map.has(key)) {
        return map.get(key)
    }
    let val = create();
    map.set(key, val)
    return val
}

// An module with imports and exports that will be generated
function Module(name) {
    this.name = name;
    this.imports = new Set();
    this.exports = [];
    this.importPathToPrefix = path => path.replaceAll(/[\.\/]/g, '$');
    this.exportsIds = new Set();
    this.add = info => {
        let importPath = [...info.path, 'code.js'].slice(1)
        let importPathString = importPath.join('/')
        this.imports.add(importPathString)
        let prefix = this.importPathToPrefix(importPathString)
        let exportId = info.name + '$' + prefix;
        if (this.exportsIds.has(exportId)) {
            return;
        }
        this.exportsIds.add(exportId)
        this.exports.push({ exportedName: info.name, prefix: prefix })
    }
}

let modules = new Map()
// Rewrite every module$something Identifier into an import and one usage of
// that import. Also register every export from each module
files.forEach(result => {
    esprima_walk.walk(result.program, e => {
        if (e === null) {
            return;
        }
        if (e.name === undefined) {
            return;
        }
        if (!e.name.startsWith('module$')) {
            return;
        }
        let nameInfo = divideMangledName(e.name);
        if (nameInfo.isExported) {
            let moduleName = nameInfo.path[0];
            result.addImport(moduleName);
            e.name = moduleName + '.' + nameInfo.name;

            // Add the importedName to the imports and exports of the module
            let module = putIfAbsent(modules, moduleName, _ => new Module(moduleName))
            module.add(nameInfo)
        } else {
            // find the relative path
            let currentPath = Array.of(...result.path)
            let targetPath = Array.of(...nameInfo.path, 'code.js')
            let commonPart = takeWhile(zip(currentPath, targetPath), e => e.left == e.right).map(e => e.left);
            let a = Array.of(...currentPath).splice(commonPart.length);
            let b = Array.of(...targetPath).splice(commonPart.length);
            let resultPath = [].concat(a.map(_ => '..'), b);
            var module = nameInfo.path[nameInfo.path.length - 1]
            // Append an $m to the beggining, if the module name starts with an
            // number, as this is not allowed by javascript.
            if (!Number.isNaN(Number.parseInt(module[0]))) {
                module = `$m${module}`;
            }
            // Import from relative path with name $module
            result.addImport(module, resultPath.join('/'));
            e.name = module + '.' + nameInfo.name;
        }
    })
})

// Clean the out folder
fs.rmdirSync('out', { recursive: true })
fs.mkdirSync('out')

// Create an module index.js for each module with the exports
modules.forEach((v, k) => {
    let filePath = k + '/index.js';
    let unit = new Result([k], filePath)
    files.set(filePath, unit)
    for (var impPath of v.imports) {
        let importPrefix = v.importPathToPrefix(impPath)
        unit.addImport(importPrefix, impPath)
    }
    for (var exp of v.exports) {
        let name = exp.exportedName;
        let prefix = exp.prefix;
        exportDeclaration = {
            type: "ExpressionStatement",
            expression: {
                type: "AssignmentExpression",
                operator: "=",
                left: {
                    type: "MemberExpression",
                    computed: false,
                    object: {
                        type: "Identifier",
                        name: "exports"
                    },
                    property: {
                        type: "Identifier",
                        name: name
                    }
                },
                right: {
                    type: "MemberExpression",
                    computed: false,
                    object: {
                        type: "Identifier",
                        name: prefix
                    },
                    property: {
                        type: "Identifier",
                        name: name
                    }
                }
            }
        };
        unit.decls.push(exportDeclaration)
    }
})


// Write into files at the out folder
files.forEach((v, k) => {
    let parentDir = 'out/' + v.path.join('/')
    if (parentDir !== '') {
        fs.mkdirSync(parentDir, { recursive: true })
    }
    let fileContent = escodegen.generate(v.program)
    fs.appendFileSync('out/' + v.filePath, fileContent)
})

console.log('Done writing the files: ', Array.from(files.keys()))
//console.log(modules)