const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function overrideWebpack(config, env) {
  config = injectBabelPlugin(
    ['import', [{ libraryName: 'antd', style: true }]],
    config,
  );

  config = injectBabelPlugin(['lodash', ['lodash', 'recompose']], config);

  config = rewireLess.withLoaderOptions({})(config, env);

  return config;
};
