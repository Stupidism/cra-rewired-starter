import React from 'react';
import { mount } from 'enzyme';

import { HeaderRenderer } from '../Header';

describe('<App />', () => {
  describe('should be consistent with snapshots', () => {
    it('when default', () => {
      const snapshot = mount(<HeaderRenderer />);
      expect(snapshot).toMatchSnapshot();
    });

    it('when logo is spinning', () => {
      const snapshot = mount(<HeaderRenderer logoSpinning />);
      expect(snapshot).toMatchSnapshot();
    });
  });

  it('should render the logo and the title', () => {
    const wrapper = mount(<HeaderRenderer to="some-url" />);
    expect(wrapper.find('img.Logo').length).toBe(1);
    expect(wrapper.find('h1.Title').length).toBe(1);
  });
});
