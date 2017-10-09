import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';

const initialState = {};
const enhancers = [];
const middleware = [thunk];

const composeEnhancers =
  process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

const composedEnhancers = composeEnhancers(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
