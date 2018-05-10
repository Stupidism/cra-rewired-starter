describe('configureStore(state, reducer): store', () => {
  describe('for composeWithDevTools', () => {
    let mockComposeWithDevTools;
    let cacheNodeEnv;
    beforeAll(() => {
      mockComposeWithDevTools = jest.fn();
      jest.mock('redux-devtools-extension', () => ({
        composeWithDevTools: mockComposeWithDevTools,
      }));
      cacheNodeEnv = process.env.NODE_ENV;
    });

    afterAll(() => {
      jest.resetModules();
      process.env.NODE_ENV = cacheNodeEnv;
    });

    it('should use composeWithDevTools in development environment', () => {
      const configureStore = require('../index').configureStore;

      configureStore();
      expect(mockComposeWithDevTools).not.toHaveBeenCalled();
      process.env.NODE_ENV = 'development';

      configureStore();
      expect(mockComposeWithDevTools).toHaveBeenCalled();
    });
  });

  describe('for default parameters', () => {
    let configureStore;
    beforeAll(() => {
      jest.resetModules();
      configureStore = require('../index').configureStore;
    });

    it('should use default blank object as initialState', () => {
      const store = configureStore();
      expect(store.getState()).toEqual({});
    });

    it('should use identity reducer if reducer is not provided', () => {
      const store = configureStore({ name: 'someWiredInitialState' });
      const initialState = store.getState();
      store.dispatch({ type: 'anyAction' });
      expect(store.getState()).toBe(initialState);
    });
  });
});
