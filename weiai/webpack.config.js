// less生成css
var path = require('path');
global.staticDir = path.join(__dirname, 'views_assets');
require('./build/less/npmCss')();

//打包css,js  如果需要兼容win7中IE8，以下打包项目未用到
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var forUglifyJS = {
    compress: {
      properties:false,
      warnings: false
    },
    output:{
      beautify:true,
      quote_keys:true
    },
    mangle:{
      screw_ie8:false
    },
    sourceMap: false
  };
//   forUglifyJS={};
var config = {
    entry: {
        bundleCss:__dirname+'/build/entry_css.js',
        bundleJs:__dirname+'/build/entry_js.js'
    },
    output: {
        path: __dirname+'/views_actions/bundle',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.css$/,loader: 'style-loader!css-loader'},
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
            {test: /\.svg/, loader: 'svg-url-loader'}
        ]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin(forUglifyJS),
    ]
};
module.exports = config;