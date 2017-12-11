const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = {
  webpack: overrideWebpack,
  jest: overrideJest,
};

function overrideWebpack(config, env) {
  config = injectBabelPlugin(['import', [
    { libraryName: 'antd', style: true },
  ]], config);

  config = rewireLess.withLoaderOptions({})(config, env);

  return config;
}

function overrideJest(config) {
  config.setupTestFrameworkScriptFile = '<rootDir>/jest-setup.js';
  return config;
}
