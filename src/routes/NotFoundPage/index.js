import createAsyncComponent from 'modules/createAsyncComponent';

export default createAsyncComponent(
  /* webpackChunkName: "routes-NotFoundPage" */
  () => import('./NotFoundPage'),
);
