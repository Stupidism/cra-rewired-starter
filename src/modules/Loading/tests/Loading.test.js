import React from 'react';
import { mount } from 'enzyme';

import Loading from '../Loading';

describe('<Loading />', () => {
  it('should be consistent with snapshot', () => {
    const snapshot = mount(<Loading />);
    expect(snapshot).toMatchSnapshot();
  });
});
