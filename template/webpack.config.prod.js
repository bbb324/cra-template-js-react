/**
 * Created by junxie on 18/5/27.
 */
const {merge} = require('webpack-merge');
const base = require('./webpack.config.basic');

const path = require('path');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(base, {
    mode: 'production',
    optimization: {
        minimizer: [
            // 压缩css
            new OptimizeCss(),
            // 压缩js
            new UglifyJsPlugin({
                // 启用文件缓存
                cache: true,
                // 使用多线程提高构建速度
                parallel: true,
                // 使用sourcemap
                sourceMap: true
            })
        ]
    }
});
