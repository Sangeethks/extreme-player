'use strict'
const path = require('path')
const config = require('../config')
const webpack = require('webpack')
const webpackBaseConfig = require('./webpack.base.conf.js')
const copyWebpackPlugin = require('copy-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')

// Settings for clean webpack plugin
var pathsToClean = [
  'dist'
]
var cleanOptions = {
  root: path.resolve(__dirname, '../'),
  verbose: true
}

const webpackProdConfig = merge(webpackBaseConfig, {
  mode: 'production',
  devtool: config.prod.devtool,
  output: {
    path: config.prod.assetsRoot,
    filename: 'index.js'
  },
  plugins: [
    new uglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: true,
      parallel: true
    }),
    new copyWebpackPlugin([{
      from: path.resolve(__dirname, '../package.json'),
      to: config.prod.assetsRoot
    }, {
      from: path.resolve(__dirname, '../assets'),
      to: path.resolve(__dirname, '../dist/assets')
    }]),
    new cleanWebpackPlugin(pathsToClean, cleanOptions)
  ]
})

module.exports = webpackProdConfig
