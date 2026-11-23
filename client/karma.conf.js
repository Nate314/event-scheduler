// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
    ],
    customLaunchers: {
      // Chromium in Docker runs as root without a user namespace sandbox.
      ChromeHeadlessDocker: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    reporters: ['progress'],
    browsers: ['ChromeHeadlessDocker'],
    restartOnFileChange: true
  });
};
