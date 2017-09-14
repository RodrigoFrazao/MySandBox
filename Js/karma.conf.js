module.exports = function(config) {
  config.set({

    basePath: '',

      reporters: ['progress', 'html'],


    frameworks: ['jasmine'],

      plugins:[
          'karma-jasmine',
          'karma-chrome-launcher',
          'karma-html-reporter'
      ],

    files: [
        'js/*.js',
        'test/*.js',
        'node_modules/jquery/dist/jquery.js'
    ],

      htmlReporter: {
          outputDir: 'karma_html', // where to put the reports
          templatePath: null, // set if you moved jasmine_template.html
          focusOnFailures: true, // reports show failures on start
          namedFiles: false, // name files instead of creating sub-directories
          pageTitle: null, // page title for reports; browser info by default
          urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
          reportName: 'report-summary-filename', // report summary filename; browser info by default


          // experimental
          preserveDescribeNesting: false, // folded suites stay folded
          foldAll: false, // reports start folded (only with preserveDescribeNesting)
      },

    exclude: ['test/JSONaccountUpdater.test.js', 'js/JSONaccountUpdater.js'],

    preprocessors: {},

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,


    concurrency: Infinity
  })
}
