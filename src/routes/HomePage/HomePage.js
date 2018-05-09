import React from 'react';
import { Link } from 'react-router-dom';

import ExternalLink from 'components/ExternalLink';

import LogoSpinSwitch from './LogoSpinSwitch';
import './HomePage.less';

export const HomePage = () => (
  <div className="HomePage">
    <p>
      To get started, edit <code>src/containers/App/App.js</code> and save to
      reload.
    </p>
    <p>
      This repo is created upon{' '}
      <ExternalLink to="https://github.com/facebook/create-react-app">
        create-react-app
      </ExternalLink>. Extra features are listed below:
    </p>
    <p>
      Click <Link to="/some/undefined/route">some undefined route</Link> to try{' '}
      <ExternalLink to="https://github.com/ReactTraining/react-router">
        react-router
      </ExternalLink>.
    </p>
    <p>
      Look at this beautiful toggle <LogoSpinSwitch />, it's from{' '}
      <ExternalLink to="https://ant.design/components/switch/">
        ant-design
      </ExternalLink>.
    </p>
    <p>
      Did you find? The toggle controls the logo across components thanks to{' '}
      <ExternalLink to="https://redux.js.org/introduction">redux</ExternalLink>.
    </p>
  </div>
);

export default HomePage;
