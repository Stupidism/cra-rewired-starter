import createAsyncComponent from 'modules/createAsyncComponent';

export default createAsyncComponent(
  /* webpackChunkName "routes-HomePage" */
  () => import('./HomePage'),
);
