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

  return config;
};
