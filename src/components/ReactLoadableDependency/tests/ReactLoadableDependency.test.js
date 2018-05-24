import React from 'react';
import { shallow } from 'enzyme';

import ReactLoadableDependency from '../ReactLoadableDependency';

describe('<ReactLoadableDependency />', () => {
  it('should be consistent with snapshot', () => {
    const snapshot = shallow(<ReactLoadableDependency />);
    expect(snapshot).toMatchSnapshot();
  });
});
