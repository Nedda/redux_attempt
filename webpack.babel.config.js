var path = require('path');
var webpack = require('webpack');
console.log('yooooo');

module.exports = {
    entry: "./app.js",
    output: {
        path: path.join(__dirname, '/bundles'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { 
                test: /\.jsx?$/, 
                loader: 'babel-loader',
            }
        ]
    },

}
