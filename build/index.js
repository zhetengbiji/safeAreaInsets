const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

webpack(webpackConfig, (err, stats) => {
    if(err) {
        console.error('webpack build error')
    } else {
        console.log('webpack build success')
    }
})