import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import Header from 'containers/Header';
import App from 'routes/App';

describe('<App />', () => {
  it('should be consistent with snapshot', () => {
    const snapshot = shallow(<App />);
    expect(snapshot).toMatchSnapshot();
  });

  it('should render the header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('should render some routes', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Route).length).not.toBe(0);
  });
});
