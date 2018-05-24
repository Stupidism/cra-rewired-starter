import Loadable from 'react-loadable';
import delayPromise from 'utils/delayPromise';

import ReactLoadableDependency from '../ReactLoadableDependency';

export default Loadable({
  loader: () =>
    delayPromise(
      import('./Dependencies' /* webpackChunkName: "components.Dependencies" */),
      2000,
    ),
  loading: ReactLoadableDependency,
});
