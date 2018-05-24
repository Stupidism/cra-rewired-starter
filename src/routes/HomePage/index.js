import createAsyncComponent from 'modules/createAsyncComponent';

export default createAsyncComponent(() =>
  import(/* webpackChunkName: "routes.HomePage" */ './HomePage'),
);
