const fs = require('fs');
const esprima = require('esprima');
const escodegen = require('escodegen');
const esprima_walk = require('esprima-walk');

let jsContent = fs.readFileSync('out.html2.js').toString();
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
    let name = namespaced[namespaced.length - 1]
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
let ignored = decls.filter(e => e instanceof Raw);
const useStrict = {
    "type": "ExpressionStatement",
    "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "'use strict'"
    },
    "directive": "use strict"
};
console.log('Ignoring the following statements: ' + ignored.map(e => escodegen.generate(e.body)));
let files = new Map();
members.forEach(e => {
    var result = files.get(e.fileName);
    if (result === undefined) {
        result = new Result(e)
        files.set(e.fileName, result)
    }
    result.decls.push(e.body)
});


// An compilation unit which will be built from the analyzed code
function Result(method) {
    let decls = [useStrict]
    this.path = method.path;
    this.filePath = method.fileName;
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
 * Array utils
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

// Rewrite every module$something Identifier into an import and one usage of
// that import
files.forEach(result => {
    esprima_walk.walk(result.program, e => {
        if (e.name === undefined) {
            return;
        }
        if (!e.name.startsWith('module$')) {
            return;
        }
        let nameInfo = divideMangledName(e.name);
        if (nameInfo.isExported) {
            let module = nameInfo.path[0];
            result.addImport(module);
            e.name = module + '.' + nameInfo.name;
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