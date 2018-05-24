// @flow
import { createReducer } from 'redux-create-reducer';

import { randomQuoteList } from 'apis';

// ------------------------------------
// Types
// ------------------------------------
type RandomQuote = {
  author: string,
  quote: string,
};

// ------------------------------------
// Constants
// ------------------------------------
export const RANDOM_QUOTE_START = 'randomQuote.start';
export const RANDOM_QUOTE_SUCCEED = 'randomQuote.succeed';
export const RANDOM_QUOTE_FAIL = 'randomQuote.fail';

// ------------------------------------
// Actions
// ------------------------------------
export const randomQuoteStart = () => ({ type: RANDOM_QUOTE_START });
export const randomQuoteSucceed = (value: RandomQuote) => ({
  type: RANDOM_QUOTE_SUCCEED,
  value,
});
export const randomQuoteFail = error => ({ type: RANDOM_QUOTE_FAIL, error });

// ------------------------------------
// Async Actions
// ------------------------------------
export const fetchRandomQuote = () => async (dispatch, getState, { fetch }) => {
  if (getState().randomQuote.loading) return;
  dispatch(randomQuoteStart());
  try {
    const [{ author, quote }] = await fetch(randomQuoteList());
    const randomQuoteResult = { author, quote };

    // Intentionally delay data-fetching for demonstration
    return new Promise(resolve =>
      setTimeout(() => {
        dispatch(randomQuoteSucceed(randomQuoteResult));
        resolve(randomQuoteResult);
      }, 2000),
    );
  } catch (error) {
    dispatch(randomQuoteFail(error));
  }
};

// ------------------------------------
// Selectors
// ------------------------------------
export const isRandomQuoteLoading = ({ randomQuote }) => randomQuote.loading;

// ------------------------------------
// Reducers
// ------------------------------------
export const initialState = {
  loading: false,
  failed: false,
  value: null,
  error: null,
};

export default createReducer(initialState, {
  [RANDOM_QUOTE_START]: () => ({
    ...initialState,
    loading: true,
  }),
  [RANDOM_QUOTE_SUCCEED]: (state, { value }) => ({
    ...state,
    value,
    loading: false,
  }),
  [RANDOM_QUOTE_FAIL]: (state, { error }) => ({
    ...state,
    error,
    loading: false,
    failed: true,
  }),
});
