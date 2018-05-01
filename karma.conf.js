const path = require('path');
const webpack = require('webpack')

module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'],
    files: [
      'test/**/*.test.js'
    ],
    preprocessors: {
      'test/**/*.test.js': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [{
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }]
      },
    },
    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
  });
};
