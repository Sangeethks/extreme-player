'use strict'
const path = require('path')

var config = {
  dev: {
    host: 'localhost',
    port: 3005,
    devtool: 'cheap-module-eval-source-map'
  },
  prod: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: '/',
    devtool: '#source-map'
  }
}

module.exports = config;
