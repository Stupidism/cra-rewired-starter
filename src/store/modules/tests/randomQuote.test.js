import { randomQuoteList } from 'apis';

import randomQuoteReducer, {
  initialState,
  randomQuoteStart,
  randomQuoteSucceed,
  randomQuoteFail,
  fetchRandomQuote,
  isRandomQuoteLoading,
} from '../randomQuote';

describe('[reducer] randomQuoteReducer(state, action): newState', () => {
  it('should reset state for a randomQuoteStart action', () => {
    const state = {
      foo: 1,
      bar: 2,
    };

    expect(randomQuoteReducer(state, randomQuoteStart())).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should stop loading and set value for a randomQuoteSucceed action', () => {
    const state = {
      foo: 1,
      bar: 2,
    };

    const value = {
      baz: 3,
    };

    expect(randomQuoteReducer(state, randomQuoteSucceed(value))).toEqual({
      ...state,
      value,
      loading: false,
    });
  });

  it('should stop loading and set error for a randomQuoteFail action', () => {
    const state = {
      foo: 1,
      bar: 2,
    };

    const error = {
      baz: 3,
    };

    expect(randomQuoteReducer(state, randomQuoteFail(error))).toEqual({
      ...state,
      error,
      failed: true,
      loading: false,
    });
  });
});

describe('[async action] fetchRandomQuote', () => {
  it('should dispatch randomQuoteSucceed when fetch succeed', async () => {
    const result = { author: 'foo', quote: 'bar' };
    const getStateMock = jest.fn(() => ({ randomQuote: {} }));
    const dispatchMock = jest.fn();
    const fetchMock = jest.fn(() => [result]);

    await fetchRandomQuote()(dispatchMock, getStateMock, { fetch: fetchMock });

    expect(getStateMock).toHaveBeenCalled();
    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(dispatchMock).toHaveBeenCalledWith(randomQuoteStart());
    expect(dispatchMock).toHaveBeenCalledWith(randomQuoteSucceed(result));
    expect(fetchMock).toHaveBeenCalled();
    expect(fetchMock).toHaveBeenCalledWith(randomQuoteList());
  });

  it('should not ignore action when randomQuote is loading', async () => {
    const getStateMock = jest.fn(() => ({ randomQuote: { loading: true } }));
    const dispatchMock = jest.fn();
    const fetchMock = jest.fn();

    await fetchRandomQuote()(dispatchMock, getStateMock, { fetch: fetchMock });

    expect(getStateMock).toHaveBeenCalled();
    expect(dispatchMock).not.toHaveBeenCalled();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('should dispatch randomQuoteFail when fetch fail', async () => {
    const error = new Error('fake error');
    const dispatchMock = jest.fn();
    const getStateMock = jest.fn(() => ({ randomQuote: {} }));
    const fetchMock = jest.fn(() => {
      throw error;
    });

    await fetchRandomQuote()(dispatchMock, getStateMock, { fetch: fetchMock });

    expect(getStateMock).toHaveBeenCalled();
    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(dispatchMock).toHaveBeenCalledWith(randomQuoteStart());
    expect(dispatchMock).toHaveBeenCalledWith(randomQuoteFail(error));
    expect(fetchMock).toHaveBeenCalled();
    expect(fetchMock).toHaveBeenCalledWith(randomQuoteList());
  });
});

test('[selector] isRandomQuoteLoading(state) => loading', () => {
  expect(isRandomQuoteLoading({ randomQuote: { loading: true } })).toEqual(
    true,
  );
});
