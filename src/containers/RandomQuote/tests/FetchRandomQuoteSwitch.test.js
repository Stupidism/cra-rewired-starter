import React from 'react';
import { shallow } from 'enzyme';

import { FetchRandomQuoteButton } from '../FetchRandomQuoteButton';

describe('<FetchRandomQuoteButton />', () => {
  it('should be consistent with snapshot', () => {
    const snapshot = shallow(
      <FetchRandomQuoteButton loading>Button</FetchRandomQuoteButton>,
    );
    expect(snapshot).toMatchSnapshot();
  });
});
