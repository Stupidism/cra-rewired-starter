import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../HomePage';

describe('<HomePage />', () => {
  it('should be consistent with snapshot', () => {
    const snapshot = shallow(<HomePage />);
    expect(snapshot).toMatchSnapshot();
  });
});
