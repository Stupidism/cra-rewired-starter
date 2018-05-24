import createAsyncComponent from 'modules/createAsyncComponent';

export default createAsyncComponent(() =>
  import('./NotFoundPage' /* webpackChunkName: "routes.NotFoundPage" */),
);
