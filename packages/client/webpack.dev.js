/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    index: 'index.html',
  },
});
