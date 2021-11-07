'use strict';
const contracts = require('code.js');
function contracts_typeOfAttribute(elName, attrName, getValue) {
    if (Object.hasOwnProperty.call(contracts.contracts_ELEMENT_CONTRACTS, elName)) {
        const elementInfo = contracts.contracts_ELEMENT_CONTRACTS[elName];
        if (Object.hasOwnProperty.call(elementInfo, attrName)) {
            const attrInfoArray = elementInfo[attrName];
            if (attrInfoArray instanceof Array) {
                let valueCache = null, requiredValueNotFound = !1;
                for (let i = 0, n = attrInfoArray.length; i < n; ++i) {
                    const attrInfo = attrInfoArray[i], contingentAttr = attrInfo.contingentAttribute;
                    if (!contingentAttr)
                        return attrInfo.contract;
                    null === valueCache && (valueCache = {});
                    const actualValue = Object.hasOwnProperty.call(valueCache, contingentAttr) ? valueCache[contingentAttr] : valueCache[contingentAttr] = getValue(contingentAttr);
                    if (actualValue === attrInfo.requiredValue)
                        return attrInfo.contract;
                    null == actualValue && (requiredValueNotFound = !0);
                }
                if (requiredValueNotFound)
                    return null;
            }
        }
    }
    const globalAttrType = contracts.contracts_GLOBAL_ATTRS[attrName];
    return 'number' === typeof globalAttrType ? globalAttrType : null;
}
const contracts_GLOBAL_ATTRS = {
    align: 1,
    alt: 1,
    'aria-activedescendant': 10,
    'aria-atomic': 1,
    'aria-autocomplete': 1,
    'aria-busy': 1,
    'aria-checked': 1,
    'aria-controls': 10,
    'aria-disabled': 1,
    'aria-dropeffect': 1,
    'aria-expanded': 1,
    'aria-haspopup': 1,
    'aria-hidden': 1,
    'aria-invalid': 1,
    'aria-label': 1,
    'aria-labelledby': 10,
    'aria-level': 1,
    'aria-live': 1,
    'aria-multiline': 1,
    'aria-multiselectable': 1,
    'aria-orientation': 1,
    'aria-owns': 10,
    'aria-posinset': 1,
    'aria-pressed': 1,
    'aria-readonly': 1,
    'aria-relevant': 1,
    'aria-required': 1,
    'aria-selected': 1,
    'aria-setsize': 1,
    'aria-sort': 1,
    'aria-valuemax': 1,
    'aria-valuemin': 1,
    'aria-valuenow': 1,
    'aria-valuetext': 1,
    async: 8,
    autocapitalize: 1,
    autocomplete: 1,
    autocorrect: 1,
    autofocus: 1,
    autoplay: 1,
    bgcolor: 1,
    border: 1,
    cellpadding: 1,
    cellspacing: 1,
    checked: 1,
    cite: 3,
    'class': 1,
    color: 1,
    cols: 1,
    colspan: 1,
    contenteditable: 1,
    controls: 1,
    datetime: 1,
    dir: 8,
    disabled: 1,
    download: 1,
    draggable: 1,
    enctype: 1,
    face: 1,
    'for': 10,
    formenctype: 1,
    frameborder: 1,
    height: 1,
    hidden: 1,
    href: 4,
    hreflang: 1,
    id: 10,
    ismap: 1,
    itemid: 1,
    itemprop: 1,
    itemref: 1,
    itemscope: 1,
    itemtype: 1,
    label: 1,
    lang: 1,
    list: 10,
    loading: 8,
    loop: 1,
    max: 1,
    maxlength: 1,
    media: 1,
    min: 1,
    minlength: 1,
    multiple: 1,
    muted: 1,
    name: 10,
    nonce: 1,
    open: 1,
    placeholder: 1,
    poster: 3,
    preload: 1,
    rel: 1,
    required: 1,
    reversed: 1,
    role: 1,
    rows: 1,
    rowspan: 1,
    selected: 1,
    shape: 1,
    size: 1,
    sizes: 1,
    slot: 1,
    span: 1,
    spellcheck: 1,
    src: 4,
    srcset: 11,
    start: 1,
    step: 1,
    style: 5,
    summary: 1,
    tabindex: 1,
    target: 8,
    title: 1,
    translate: 1,
    type: 1,
    valign: 1,
    value: 1,
    width: 1,
    wrap: 1
};
const contracts_ELEMENT_CONTRACTS = {
    a: { href: [{ contract: 3 }] },
    area: { href: [{ contract: 3 }] },
    audio: { src: [{ contract: 3 }] },
    button: {
        formaction: [{ contract: 3 }],
        formmethod: [{ contract: 1 }]
    },
    form: {
        action: [{ contract: 3 }],
        method: [{ contract: 1 }]
    },
    iframe: { srcdoc: [{ contract: 2 }] },
    img: { src: [{ contract: 3 }] },
    input: {
        accept: [{ contract: 1 }],
        formaction: [{ contract: 3 }],
        formmethod: [{ contract: 1 }],
        pattern: [{ contract: 1 }],
        readonly: [{ contract: 1 }],
        src: [{ contract: 3 }]
    },
    link: {
        href: [
            {
                contract: 3,
                contingentAttribute: 'rel',
                requiredValue: 'alternate'
            },
            {
                contract: 3,
                contingentAttribute: 'rel',
                requiredValue: 'author'
            },
            {
                contract: 3,
                contingentAttribute: 'rel',
                requiredValue: 'bookmark'
            },
            {
                contract: 3,
                contingentAttribute: 'rel',
                requiredValue: 'canonical'
            },
            {
                contract: 3,
                contingentAttribute: 'rel',
                requiredValue: 'cite'
            },
            {
                contract: 3,
                contingentAttribute: 'rel',
                requiredValue: 'help'
            },
            {
                contract: 3,
                contingentAttribute: 'rel',
                requiredValue: 'icon'
            },
            {
                contract: 3,
                contingentAttribute: 'rel',
                requiredValue: 'license'
            },
            {
                contract: 3,
                contingentAttribute: 'rel',
                requiredValue: 'next'
            },
            {
                contract: 3,
                contingentAttribute: 'rel',
                requiredValue: 'prefetch'
            },
            {
                contract: 3,
                contingentAttribute: 'rel',
                requiredValue: 'dns-prefetch'
            },
            {
                contract: 3,
                contingentAttribute: 'rel',
                requiredValue: 'prerender'
            },
            {
                contract: 3,
                contingentAttribute: 'rel',
                requiredValue: 'preconnect'
            },
            {
                contract: 3,
                contingentAttribute: 'rel',
                requiredValue: 'preload'
            },
            {
                contract: 3,
                contingentAttribute: 'rel',
                requiredValue: 'prev'
            },
            {
                contract: 3,
                contingentAttribute: 'rel',
                requiredValue: 'search'
            },
            {
                contract: 3,
                contingentAttribute: 'rel',
                requiredValue: 'subresource'
            }
        ]
    },
    script: { defer: [{ contract: 1 }] },
    source: { src: [{ contract: 3 }] },
    textarea: { readonly: [{ contract: 1 }] },
    video: { src: [{ contract: 3 }] }
};
const contracts_ELEMENT_CONTENT_TYPES = {
    a: 1,
    abbr: 1,
    address: 1,
    applet: 4,
    area: 5,
    article: 1,
    aside: 1,
    audio: 1,
    b: 1,
    base: 4,
    bdi: 1,
    bdo: 1,
    blockquote: 1,
    body: 1,
    br: 5,
    button: 1,
    canvas: 1,
    caption: 1,
    center: 1,
    cite: 1,
    code: 1,
    col: 5,
    colgroup: 1,
    command: 1,
    data: 1,
    datalist: 1,
    dd: 1,
    del: 1,
    details: 1,
    dfn: 1,
    dialog: 1,
    div: 1,
    dl: 1,
    dt: 1,
    em: 1,
    embed: 4,
    fieldset: 1,
    figcaption: 1,
    figure: 1,
    font: 1,
    footer: 1,
    form: 1,
    frame: 1,
    frameset: 1,
    h1: 1,
    h2: 1,
    h3: 1,
    h4: 1,
    h5: 1,
    h6: 1,
    head: 1,
    header: 1,
    hr: 5,
    html: 1,
    i: 1,
    iframe: 1,
    img: 5,
    input: 5,
    ins: 1,
    kbd: 1,
    label: 1,
    legend: 1,
    lh: 1,
    li: 1,
    link: 5,
    main: 1,
    map: 1,
    mark: 1,
    math: 4,
    menu: 1,
    meta: 4,
    meter: 1,
    nav: 1,
    noscript: 1,
    object: 4,
    ol: 1,
    optgroup: 1,
    option: 1,
    output: 1,
    p: 1,
    param: 5,
    picture: 1,
    pre: 1,
    progress: 1,
    q: 1,
    rb: 1,
    rp: 1,
    rt: 1,
    rtc: 1,
    ruby: 1,
    s: 1,
    samp: 1,
    script: 3,
    section: 1,
    select: 1,
    slot: 1,
    small: 1,
    source: 5,
    span: 1,
    strong: 1,
    style: 2,
    sub: 1,
    summary: 1,
    sup: 1,
    svg: 4,
    table: 1,
    tbody: 1,
    td: 1,
    template: 4,
    textarea: 6,
    tfoot: 1,
    th: 1,
    thead: 1,
    time: 1,
    title: 6,
    tr: 1,
    track: 5,
    u: 1,
    ul: 1,
    'var': 1,
    video: 1,
    wbr: 5
};
const contracts_ENUM_VALUE_SETS = [
    {
        auto: !0,
        ltr: !0,
        rtl: !0
    },
    { async: !0 },
    {
        eager: !0,
        lazy: !0
    },
    {
        _self: !0,
        _blank: !0
    }
];
const contracts_ENUM_VALUE_SET_BY_ATTR = {
    '*': {
        async: 1,
        dir: 0,
        loading: 2,
        target: 3
    }
};