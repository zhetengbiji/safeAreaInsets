# safeAreaInsets
Use javascript to get the safe area insets.

## Install
```
npm install safe-area-insets --save
```

## Precondition
* WKWebview
* viewport-fit=cover

## Use
```js
const safeAreaInsets = require('safe-area-insets')

console.log('safeAreaInsets.support',safeAreaInsets.support)
console.log('safe-area-inset-top', safeAreaInsets.top)
console.log('safe-area-inset-left', safeAreaInsets.left)
console.log('safe-area-inset-right', safeAreaInsets.right)
console.log('safe-area-inset-bottom', safeAreaInsets.bottom)

safeAreaInsets.onChange(function(style) {
    console.log(style)
})
```

## Related Reading
>[Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)