import React from 'react';
import { Link } from 'react-router-dom';

import ExternalLink from 'modules/ExternalLink';
import Loading from 'modules/Loading';
import RandomQuote from 'containers/RandomQuote';
import FetchRandomQuoteButton from 'containers/RandomQuote/FetchRandomQuoteButton';
import LogoSpinSwitch from 'containers/LogoSpinSwitch';

import './Dependencies.less';

const links = {
  someUndefinedRoute: (
    <Link to="/some/undefined/route">some undefined route</Link>
  ),
  reactRouterDom: (
    <ExternalLink to="https://github.com/ReactTraining/react-router">
      react-router-dom
    </ExternalLink>
  ),
  antd: <ExternalLink to="https://ant.design/">antd</ExternalLink>,
  reduxAndReactRedux: (
    <ExternalLink to="https://redux.js.org">redux & react-redux</ExternalLink>
  ),
  recompose: (
    <ExternalLink to="https://github.com/acdlite/recompose">
      recompose
    </ExternalLink>
  ),
  wretch: (
    <ExternalLink to="https://github.com/elbywan/wretch">wretch</ExternalLink>
  ),
  reactLoading: (
    <ExternalLink to="https://codesandbox.io/s/mqx0ql55qp">
      react-loading
    </ExternalLink>
  ),
  reduxThunk: (
    <ExternalLink to="https://github.com/reduxjs/redux-thunk">
      Redux-thunk
    </ExternalLink>
  ),
  lodash: <ExternalLink to="https://lodash.com/">lodash</ExternalLink>,
  reduxCreateReducer: (
    <ExternalLink to="https://www.npmjs.com/package/redux-create-reducer/">
      redux-create-reducer
    </ExternalLink>
  ),
};

const loadingComponent = (
  <div>
    <Loading type="spin" />
    Something you might miss in a blink: above spinning loader is{' '}
    {links.reactLoading}.
  </div>
);

const Dependencies = () => (
  <div className="Dependencies">
    <p>
      Click {links.someUndefinedRoute} to try {links.reactRouterDom}.
    </p>
    <p>
      Look at this beautiful <LogoSpinSwitch /> from {links.antd}. Above buttons
      are from antd, too.
    </p>
    <p>
      You might have noticed, the toggle controls the logo across components
      thanks to {links.reduxAndReactRedux}.
    </p>
    <p>
      Have a look at the toggle's code{' '}
      <code>src/components/Dependencies/LogoSpinSwitch.js</code>,
    </p>
    <p>The code is in HOC-style with the help of {links.recompose}.</p>
    <p>
      About data-fetching, below random famous quote is fetched by{' '}
      {links.wretch}
    </p>
    <div className="QuoteWrapper">
      <RandomQuote loadingComponent={loadingComponent} />
    </div>
    <p>
      {links.reduxThunk} allows async actions like data-fetching and other IO
      operations to work. Try to{' '}
      <FetchRandomQuoteButton>load another quote</FetchRandomQuoteButton>.
    </p>
    <p>
      Also, {links.lodash} and {links.reduxCreateReducer} are used in the
      project for their powerful utility functions.
    </p>
  </div>
);

export default Dependencies;
