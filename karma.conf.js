// Karma configuration
// Generated on Sun May 03 2015 19:18:11 GMT+0900 (JST)

require('dotenv').load();

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['es5-shim', 'jasmine', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
        'tests/**/*Spec.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'tests/**/*Spec.js': ['browserify']
    },


    // https://github.com/nikku/karma-browserify
    // http://efcl.info/2014/0411/res3820/
    browserify: {
        debug: true,
        files: [
            'tests/**/*Spec.js',
        ],
        transform: [
            'brfs',
        ]
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
        'Chrome',
        'Safari',
        'Firefox',
        'IE8 - WinXP',
        'IE9 - Win7',
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
