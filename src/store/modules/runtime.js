// @flow
import { createReducer } from 'redux-create-reducer';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';

// ------------------------------------
// Types
// ------------------------------------
type Action = {
  type: string,
  value: any,
};

type ActionCreator<T> = T => Action;

// ------------------------------------
// Actions
// ------------------------------------
export const setRuntime: ActionCreator<any> = value => ({
  type: SET_RUNTIME_VARIABLE,
  value,
});

// ------------------------------------
// Reducers
// ------------------------------------
const initialState = {
  logoSpinning: true,
};

export default createReducer(initialState, {
  [SET_RUNTIME_VARIABLE]: (state, action) => ({ ...state, ...action.value }),
});
