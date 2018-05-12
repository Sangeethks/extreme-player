'use strict'
const path = require('path')
const config = require('../config')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src'
  },
  output: {
    path: config.prod.assetsRoot,
    filename: '[name].js'
  },
  resolve: {
    extensions: [ '.js', '.css', '.json' ]
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['es2015']
      },
      include: [
        resolve('src'),
        resolve('test')
      ]
    }, {
      test: /\.(html)$/,
      use: {
        loader: ['html-loader', 'file-loader']
      }
    }, {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader']
    }, {
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    }]
  }
}
