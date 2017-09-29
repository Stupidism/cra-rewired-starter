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

const defaultState = {
  selected: 0,
};

// ------------------------------------
// Actions
// ------------------------------------
export const selectMenuItem = value => ({ type: SELECT_MENU_ITEM, value });

// ------------------------------------
// Reducers
// ------------------------------------
export default createReducer(defaultState, {
  [SELECT_MENU_ITEM]: (state, { value }) => ({ selected: value }),
});
