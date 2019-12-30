/* eslint-disable import/no-extraneous-dependencies */
const endsWith = require('lodash/fp/endsWith');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AssetManifestWebpackPlugin = require('webpack-manifest-plugin');

const root = path.resolve(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'dist');

const htmlPlugin = new HtmlWebpackPlugin({
  filename: path.resolve(outputPath, 'index.html'),
  template: './src/index.html',
  inject: 'head',
});
const assetManifest = new AssetManifestWebpackPlugin({
  fileName: 'asset-manifest.json',
  publicPath: '/js/',
  filter: ({ name }) => !endsWith('.html')(name),
});

module.exports = {
  entry: {
    home: ['core-js/stable', path.resolve(root, 'index.js')],
  },
  output: {
    pathinfo: true,
    path: path.resolve(outputPath, 'js'),
    filename: 'openhab-pwa.[contenthash].js',
    publicPath: '/js',
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    htmlPlugin,
    assetManifest,
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: root,
        enforce: 'pre',
        use: {
          loader: require.resolve('eslint-loader'),
          options: {
            eslintPath: require.resolve('eslint'),
          },
        },
      },
      {
        test: /\.js?$/,
        include: root,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.gif|\.jpg$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
