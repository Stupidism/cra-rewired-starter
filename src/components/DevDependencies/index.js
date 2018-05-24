import Loadable from 'react-loadable';
import delayPromise from 'utils/delayPromise';

import ReactLoadableDependency from '../ReactLoadableDependency';

export default Loadable({
  loader: () =>
    delayPromise(
      import('./DevDependencies' /* webpackChunkName: "components.DevDependencies" */),
      2000,
    ),
  loading: ReactLoadableDependency,
});
