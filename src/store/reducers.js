import { combineReducers } from 'redux';
import runtime from './modules/runtime';
import randomQuote from './modules/randomQuote';

export default combineReducers({
  runtime,
  randomQuote,
});
