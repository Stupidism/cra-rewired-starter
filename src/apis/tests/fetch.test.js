import { globalResultResolver, createFetch } from '../fetch';

describe('globalResultResolver(fetch) => jsonResolvedResult', () => {
  it('should call .json and .then in chain', () => {
    const requestMock = {
      json: jest.fn(() => requestMock),
    };

    globalResultResolver(requestMock);
    expect(requestMock.json).toHaveBeenCalledTimes(1);
  });
});

describe('createFetch(wretchInstance) => fetchInstance(options) => requestPromise', () => {
  it('should call .url and .method in chain', () => {
    const wretchInstanceMock = {
      url: jest.fn(() => wretchInstanceMock),
      method: jest.fn(() => wretchInstanceMock),
    };

    const url = '/fake-api';

    createFetch(wretchInstanceMock)({ url });

    expect(wretchInstanceMock.url).toHaveBeenCalledWith(url, false);
    expect(wretchInstanceMock.method).toHaveBeenCalledWith('GET', {});
  });

  it('should allow full-url, method and other options', () => {
    const wretchInstanceMock = {
      url: jest.fn(() => wretchInstanceMock),
      method: jest.fn(() => wretchInstanceMock),
    };

    const url = 'http://api.fake.com';
    const method = 'POST';
    const extraOptions = {
      headers: {
        key: 'value',
      },
    };

    createFetch(wretchInstanceMock)({
      url,
      method,
      ...extraOptions,
    });

    expect(wretchInstanceMock.url).toHaveBeenCalledWith(url, true);
    expect(wretchInstanceMock.method).toHaveBeenCalledWith(
      method,
      extraOptions,
    );
  });

  it('should throw if options is not an object', () => {
    expect(createFetch({})).toThrow('[fetch]: Object options is required!');
  });
});
