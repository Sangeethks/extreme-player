'use strict'
const path = require('path')
const webpackBaseConfig = require('./webpack.base.conf.js')
const config = require('../config')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const copyWebpackPlugin = require('copy-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const friendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const webpackDevConfig = webpackMerge(webpackBaseConfig, {
  mode: 'development',
  devtool: config.dev.devtool,
  devServer: {
    clientLogLevel: 'warning',
    contentBase: path.join(__dirname, '../dist/'),
    port: PORT || config.dev.port,
    host: HOST || config.dev.host,
    quiet: true
  },
  watch: true,
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
    new friendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [
          'Application is running at : http://' + config.dev.host + ':' + config.dev.port
        ]
      }
    })
  ]
})

module.exports = webpackDevConfig
