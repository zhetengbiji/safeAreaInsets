'use strict'
var attrs = {
    top: 'top',
    left: 'left',
    right: 'right',
    bottom: 'bottom'
}
var elementComputedStyle: object
var support: string
function getSupport() {
    if(!('CSS' in window) || typeof CSS.supports != 'function') {
        support = ''
    } else if(CSS.supports('top: env(safe-area-inset-top)')) {
        support = 'env'
    } else if(CSS.supports('top: constant(safe-area-inset-top)')) {
        support = 'constant'
    } else {
        support = ''
    }
    return support
}
function init() {
    support = typeof support === 'string' ? support : getSupport()
    if(!support) {
        elementComputedStyle = {}
        Object.keys(attrs).forEach(key => {
            var attr = attrs[key]
            elementComputedStyle[attr] = 0
        })
        return
    }
    var element: HTMLElement = document.createElement('div')
    var elementStyle: CSSStyleDeclaration = element.style
    elementStyle.position = 'absolute'
    Object.keys(attrs).forEach(key => {
        var attr = attrs[key]
        elementStyle[attr] = `${support}(safe-area-inset-${attr})`
    })
    elementStyle.zIndex = '-1'
    elementStyle.visibility = 'hidden'
    elementStyle.padding = '0'
    elementStyle.margin = '0'
    document.body.appendChild(element)
    elementComputedStyle = getComputedStyle(element)
}
function getAttr(attr: string): number {
    if(!elementComputedStyle) {
        init()
    }
    return parseFloat(elementComputedStyle[attr])
}
var safeAreaInsets = {
    get support(): boolean {
        return (typeof support === 'string' ? support : getSupport()).length != 0
    },
    get top(): number {
        return getAttr(attrs.top)
    },
    get left(): number {
        return getAttr(attrs.left)
    },
    get right(): number {
        return getAttr(attrs.right)
    },
    get bottom(): number {
        return getAttr(attrs.bottom)
    }
}

export = safeAreaInsets