import React from 'react';
import { shallow } from 'enzyme';

import DevDependencies from '../DevDependencies';

describe('<DevDependencies />', () => {
  it('should be consistent with snapshot', () => {
    const snapshot = shallow(<DevDependencies />);
    expect(snapshot).toMatchSnapshot();
  });
});
