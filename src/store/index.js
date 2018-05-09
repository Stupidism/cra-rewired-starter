import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

export const configureStore = (initialState = {}, reducer = state => state) => {
  const enhancers = [];
  const middleware = [thunk];

  const composeEnhancers =
    process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

  const composedEnhancers = composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers,
  );

  return createStore(reducer, initialState, composedEnhancers);
};

export default configureStore({}, rootReducer);
