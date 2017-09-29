import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules';

const initialState = {};
const enhancers = [];
const middleware = [thunk];

let composeEnhancers = compose;
if (process.env.NODE_ENV === 'development') {
  composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;
}

const composedEnhancers = composeEnhancers(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
