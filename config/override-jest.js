module.exports = function overrideJest(config) {
  config.setupTestFrameworkScriptFile = '<rootDir>/config/jest-setup.js';
  return config;
};
