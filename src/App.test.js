import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import menuItems from 'constants/menuItems';

import { App } from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App selectedMenuItem={menuItems[0]} />, div);
  });

  it('keeps unchanged', () => {
    const tree = renderer
      .create(<App selectedMenuItem={menuItems[1]} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
