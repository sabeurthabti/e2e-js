exports.config = {

  maxInstances: 4,
  sync: true,
  specs: [
    './test/specs/**/*.js'
  ],
  exclude: [
  ],

  capabilities: [
    {
      browserName: 'phantomjs'
    }
  ],

  logLevel: 'error',
  coloredLogs: true,
  screenshotPath: './errorShots/',

  baseUrl: 'http://www.mrporter.com',
  waitforTimeout: 10000,
  framework: 'mocha',
  reporter: 'spec',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
    expectationResultHandler: function(passed, assertion) {
    }
  },
  onPrepare: function() {
  },
  before: function() {

    var chai = require('chai');
    global.chai = chai;
    global.expect = chai.expect;

    process.on('unhandledRejection', function unhandledRejection(e) {
      console.error(e);
      if (e.stack) {
        console.error(e.stack);
      }
    });

    require("babel-core/register");
    require("babel-polyfill");
  }
};
