module.exports = function overrideJest(config) {
  config.setupTestFrameworkScriptFile = '<rootDir>/config/jest-setup.js';
  config.coverageThreshold = {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  };

  config.collectCoverageFrom = [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
    '!src/index.js',
    '!src/utils/registerServiceWorker.js',
  ];

  return config;
};
