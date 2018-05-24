import React from 'react';
import { mount } from 'enzyme';

import { configureStore } from 'store';

import RandomQuote, { componentDidMount } from '../RandomQuote';

describe('<RandomQuote />', () => {
  describe('should be consistent with snapshot', () => {
    let randomQuoteMock;

    afterEach(() => {
      const storeMock = configureStore({ randomQuote: randomQuoteMock });
      const snapshot = mount(<RandomQuote loadingComponent="Loading..." />, {
        context: {
          store: storeMock,
        },
      });
      expect(snapshot).toMatchSnapshot();
    });

    it('when data fetched', () => {
      randomQuoteMock = {
        value: {
          quote: 'All quotes are stupid except mine',
          author: 'Stupidism',
        },
      };
    });

    it('when still fetching data', () => {
      randomQuoteMock = {
        loading: true,
      };
    });

    it('when failed to fetch data', () => {
      randomQuoteMock = {
        failed: true,
      };
    });
  });

  describe('componentDidMount', () => {
    it('should call fetchRandomQuote', () => {
      const props = {
        value: null,
        fetchRandomQuote: jest.fn(),
      };

      componentDidMount.call({ props });
      expect(props.fetchRandomQuote).toHaveBeenCalledTimes(1);
    });

    it('should not call fetchRandomQuote', () => {
      const props = {
        value: {},
        fetchRandomQuote: jest.fn(),
      };

      componentDidMount.call({ props });
      expect(props.fetchRandomQuote).not.toHaveBeenCalled();
    });
  });
});
