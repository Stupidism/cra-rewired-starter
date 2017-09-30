// @flow

import { createReducer } from 'redux-create-reducer';

// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_MENU_ITEM = 'SELECT_MENU_ITEM';
export const menuItems = [
  {
    name: 'Current Status',
    icon: 'clock-circle-o',
  },
  {
    name: 'Historical Data',
    icon: 'calendar',
  },
  {
    name: 'Node List',
    icon: 'bars',
  },
  {
    name: 'Group List',
    icon: 'api',
  },
  {
    name: 'Tag List',
    icon: 'tags-o',
  },
  {
    name: 'Settings',
    icon: 'setting',
  },
  {
    name: 'Sign Out',
    icon: 'logout',
  },
];

// ------------------------------------
// Types
// ------------------------------------
type Action = {
  type: 'SELECT_MENU_ITEM',
  value: number,
};

type State = {
  selected: number,
};

type ActionCreator<T> = T => Action;

type Reducer = (State, Action) => State;

type ReducersMap = {
  SELECT_MENU_ITEM: Reducer,
};

// ------------------------------------
// Actions
// ------------------------------------
export const selectMenuItem: ActionCreator<number> = value => ({
  type: SELECT_MENU_ITEM,
  value,
});

// ------------------------------------
// Reducers
// ------------------------------------
const defaultState: State = {
  selected: 0,
};

const reducersMap: ReducersMap = {
  [SELECT_MENU_ITEM]: (state, action) => ({ selected: action.value }),
};

export default createReducer(defaultState, reducersMap);
