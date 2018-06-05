const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: path.join(__dirname, '../src/index.ts'),
    output: {
        path: path.join(__dirname, '../out/umd'),
        filename: 'index.min.js',
        library: 'safeAreaInsets',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            compilerOptions: {
                                sourceMap: false,
                                declaration: false
                            }
                        }
                    }
                ],
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}