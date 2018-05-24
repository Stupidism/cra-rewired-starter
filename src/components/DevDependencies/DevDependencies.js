import React, { Fragment } from 'react';
import ExternalLink from 'modules/ExternalLink';

const links = {
  reactScripts: (
    <ExternalLink to="https://www.npmjs.com/package/react-scripts">
      react-scripts
    </ExternalLink>
  ),
  reactAppRewired: (
    <ExternalLink to="https://github.com/timarney/react-app-rewired">
      react-app-rewired
    </ExternalLink>
  ),
  reactAppRewireLess: (
    <ExternalLink to="https://www.npmjs.com/package/react-app-rewire-less">
      react-app-rewire-less
    </ExternalLink>
  ),
  enzyme: <ExternalLink to="http://airbnb.io/enzyme/">enzyme</ExternalLink>,
  enzymeAdapterReact16: (
    <ExternalLink to="https://www.npmjs.com/package/enzyme-adapter-react-16">
      enzyme-adapter-react-16
    </ExternalLink>
  ),
  reactTestRunner: (
    <ExternalLink to="https://npmjs.com/package/react-test-renderer">
      react-test-renderer
    </ExternalLink>
  ),
  enzymeToJson: (
    <ExternalLink to="https://github.com/adriantoine/enzyme-to-json">
      Enzyme-to-json
    </ExternalLink>
  ),
  prettier: <ExternalLink to="https://prettier.io/">prettier</ExternalLink>,
  stylelint: <ExternalLink to="https://stylelint.io/">stylelint</ExternalLink>,
  stylelintConfigStandard: (
    <ExternalLink to="https://github.com/stylelint/stylelint-config-standard">
      stylelint-config-standard
    </ExternalLink>
  ),
  commitlintCli: (
    <ExternalLink to="http://marionebl.github.io/commitlint/#/">
      @commitlint/cli
    </ExternalLink>
  ),
  commitlintConfigConventional: (
    <ExternalLink to="https://www.npmjs.com/package/@commitlint/config-conventional">
      @commitlint/config-conventional
    </ExternalLink>
  ),
  flowBin: <ExternalLink to="https://flow.org/">flow-bin</ExternalLink>,
  husky: (
    <ExternalLink to="https://github.com/typicode/husky">husky</ExternalLink>
  ),
  lintStaged: (
    <ExternalLink to="https://github.com/okonet/lint-staged">
      lint-staged
    </ExternalLink>
  ),
  ghPages: (
    <ExternalLink to="https://github.com/tschaub/gh-pages">
      gh-pages
    </ExternalLink>
  ),
  reduxDevtoolsExtension: (
    <ExternalLink to="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd">
      redux-devtools-extension
    </ExternalLink>
  ),
  sourceMapExplorer: (
    <ExternalLink to="https://www.npmjs.com/package/source-map-explorer">
      source-map-explorer
    </ExternalLink>
  ),
  babelPluginImport: (
    <ExternalLink to="https://github.com/ant-design/babel-plugin-import">
      babel-plugin-import
    </ExternalLink>
  ),
  babelPluginLodash: (
    <ExternalLink to="https://github.com/lodash/babel-plugin-lodash">
      babel-plugin-lodash
    </ExternalLink>
  ),
};

const Dependencies = () => (
  <Fragment>
    <p>
      If you are familiar with create-react-app, you would know{' '}
      {links.reactScripts} is where the all the magics are hidden.
    </p>
    <p>
      But sometimes we'd like it to be configurable, that's why{' '}
      {links.reactAppRewired} is introduced to 'rewire' it's configuration.
    </p>
    <p>Especially, {links.reactAppRewireLess} lets you use less with antd.</p>
    <p>
      In chrome dev tool, chrome extension {links.reduxDevtoolsExtension} can
      help you track all redux state changes.
    </p>
    <p>
      Upon commit message is written, {links.commitlintCli} and{' '}
      {links.commitlintConfigConventional} can check your commit message.
    </p>
    <p>
      Before any commit, {links.lintStaged} runs lints for git-staged files
      only, {links.prettier} for js and {links.stylelint} with{' '}
      {links.stylelintConfigStandard} for css(less).
    </p>
    <p>
      Before any push, tests must pass which are using {links.reactTestRunner},{' '}
      {links.enzyme} and {links.enzymeAdapterReact16}
    </p>
    <p>
      Above git-hooks (commitmsg, precommit, prepush) are supported by{' '}
      {links.husky}
    </p>
    <p>
      After build, {links.ghPages} can help you deploy project on github pages.
    </p>
    <p>Static type checking is supported by adding {links.flowBin}.</p>
    <p>
      {links.enzymeToJson} helps serialize EnzymeWrapper, so you can snapshot it
      with jest.
    </p>
    <p>
      To analyze bundle size, use npm script analyze which uses{' '}
      {links.sourceMapExplorer}.
    </p>
    <p>
      Under the protection of {links.babelPluginImport} and{' '}
      {links.babelPluginLodash}, import antd, lodash and recompose will not
      cause any size problem.
    </p>
  </Fragment>
);

export default Dependencies;
