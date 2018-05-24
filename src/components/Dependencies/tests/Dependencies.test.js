import React from 'react';
import { shallow } from 'enzyme';

import Dependencies from '../Dependencies';

describe('<Dependencies />', () => {
  it('should be consistent with snapshot', () => {
    const snapshot = shallow(<Dependencies />);
    expect(snapshot).toMatchSnapshot();
  });
});
