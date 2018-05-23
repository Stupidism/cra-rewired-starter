import React from 'react';
import { mount } from 'enzyme';

import ExternalLink from '../ExternalLink';

describe('<App />', () => {
  it('should be consistent with snapshot', () => {
    const snapshot = mount(<ExternalLink to="some-url" />);
    expect(snapshot).toMatchSnapshot();
  });

  it('should render an `a` tag element', () => {
    const wrapper = mount(<ExternalLink to="some-url">link</ExternalLink>);
    expect(wrapper.getDOMNode().innerHTML).toBe('link');
    expect(wrapper.getDOMNode().getAttribute('href')).toBe('some-url');
    expect(wrapper.getDOMNode().getAttribute('rel')).toBe(
      'noopener noreferrer',
    );
    expect(wrapper.getDOMNode().getAttribute('target')).toBe('_blank');
  });
});
