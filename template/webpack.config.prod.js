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
            //ѹ��CSS����
            new OptimizeCss(),
            //ѹ��js����
            new UglifyJsPlugin({
                //�����ļ�����
                cache: true,
                //ʹ�ö��̲߳���������߹����ٶ�
                parallel: true,
                //ʹ�� SourceMaps ��������Ϣ��λ��ӳ�䵽ģ��
                sourceMap: true
            })
        ]
    }
});
