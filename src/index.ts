'use strict'
var attrs = {
    top: 'top',
    left: 'left',
    right: 'right',
    bottom: 'bottom'
}
var elementComputedStyle: object
function init() {
    var constant: string
    if(CSS.supports('top: env(safe-area-inset-top)')) {
        constant = 'env'
    } else if(CSS.supports('top: constant(safe-area-inset-top)')) {
        constant = 'constant'
    } else {
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
        elementStyle[attr] = `${constant}(safe-area-inset-${attr})`
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