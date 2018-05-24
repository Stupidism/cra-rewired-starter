import React from 'react';
import Loading from 'modules/Loading/index';
import ExternalLink from 'modules/ExternalLink/index';

const links = {
  reactLoadable: (
    <ExternalLink to="https://github.com/jamiebuilds/react-loadable/">
      react-loadable
    </ExternalLink>
  ),
};

const ReactLoadableDependency = () => (
  <div>
    <p>
      Using {links.reactLoadable}, code-splits for Routes and Components are
      easy peasy.
    </p>
    <Loading />
    <p>You can see this loading, because it's intentionally delayed.</p>
  </div>
);

export default ReactLoadableDependency;
