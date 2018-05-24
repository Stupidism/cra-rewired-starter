import React from 'react';
import { withHandlers, compose, withProps } from 'recompose';
import { Button, Divider } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';

import ExternalLink from 'modules/ExternalLink';
import Dependencies from 'components/Dependencies';
import DevDependencies from 'components/DevDependencies';

import './HomePage.less';

const links = {
  createReactApp: (
    <ExternalLink to="https://github.com/facebook/create-react-app">
      create-react-app
    </ExternalLink>
  ),
};

export const HomePageRenderer = ({
  match,
  dependenciesButtonType,
  devDependenciesButtonType,
  goToDependencies,
  goToDevDependencies,
  dependenciesUrl,
  devDependenciesUrl,
}) => (
  <div className="HomePage">
    <p>
      To get started, edit <code>src/routes/App.js</code> and save to reload.
    </p>
    <p>
      This repo is created over {links.createReactApp}. Extra features are
      listed below:
    </p>
    <Button.Group>
      <Button type={dependenciesButtonType} onClick={goToDependencies}>
        Dependencies
      </Button>
      <Button type={devDependenciesButtonType} onClick={goToDevDependencies}>
        DevDependencies
      </Button>
    </Button.Group>
    <Divider />
    <Switch>
      <Redirect exact from={match.url} to={dependenciesUrl} />
      <Route path={dependenciesUrl} component={Dependencies} />
      <Route path={devDependenciesUrl} component={DevDependencies} />
    </Switch>
  </div>
);

export const goToDependencies = ({ history, dependenciesUrl }) => () =>
  history.push(dependenciesUrl);
export const goToDevDependencies = ({ history, devDependenciesUrl }) => () =>
  history.push(devDependenciesUrl);

const propsMapper = ({ match, location }) => ({
  dependenciesButtonType: location.pathname.endsWith('/dependencies')
    ? 'primary'
    : 'default',
  devDependenciesButtonType: location.pathname.endsWith('/dev-dependencies')
    ? 'primary'
    : 'default',
  dependenciesUrl: `${match.url}/dependencies`,
  devDependenciesUrl: `${match.url}/dev-dependencies`,
});

export default compose(
  withProps(propsMapper),
  withHandlers({
    goToDependencies,
    goToDevDependencies,
  }),
)(HomePageRenderer);
