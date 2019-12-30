/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');

const uglify = new TerserWebpackPlugin({
  parallel: true,
  terserOptions: {
    ecma: 6,
  },
});

module.exports = merge(common, {
  mode: 'production',
  devtool: 'cheap-source-map',
  optimization: {
    minimizer: [
      uglify,
    ],
  },
});
