import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';

import NotFoundPage from '../NotFoundPage';

describe('<App />', () => {
  it('should be consistent with snapshot', () => {
    const snapshot = mount(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    );
    expect(snapshot).toMatchSnapshot();
  });

  it('should render a `Link` to homepage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    );
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(
      wrapper
        .find(Link)
        .getDOMNode()
        .getAttribute('href'),
    ).toBe('/');
    expect(wrapper.find(Link).text()).toBe('Home');
  });
});
