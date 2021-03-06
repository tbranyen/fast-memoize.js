var package = require('./package.json')

//
// Export
//

module.exports = function(config) {
  var confOptions = {
    plugins: [
      require('karma-webpack'),
      require('karma-tap'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-safari-launcher'),
      require('karma-sauce-launcher')
    ],
    basePath: '',
    frameworks: [ 'tap' ],
    files: [ 'test/*.js' ],
    preprocessors: {
      'test/*.js': [ 'webpack' ]
    },
    webpack: {
      node : {
        fs: 'empty'
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    reporters: [ 'dots' ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      'Chrome',
      'Firefox',
      'Safari'
    ],
    singleRun: false,

    // To avoid DISCONNECTED messages
    browserDisconnectTimeout : 10000,
    browserDisconnectTolerance : 1,
    browserNoActivityTimeout : 60000,
  }

  config.set(confOptions)
};
