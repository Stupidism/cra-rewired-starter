import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import menuItems from 'constants/menuItems';

import { App } from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App selectedMenuItem={menuItems[0]} />, div);
  });

  it('keeps unchanged in normal state', () => {
    const tree = renderer
      .create(<App selectedMenuItem={menuItems[1]} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('keeps unchanged when menu is collapsed', () => {
    const wrapper = mount(<App selectedMenuItem={menuItems[1]} />);
    wrapper.instance().toggle();
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('keeps child components unchanged', () => {
    const wrapper = shallow(<App selectedMenuItem={menuItems[1]} />).until();
    expect(wrapper).toMatchSnapshot();
  });
});
