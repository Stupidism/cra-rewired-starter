import runtimeReducer, { setRuntime } from '../runtime';

test('[reducer] runtimeReducer() merge state(runtime) with action.value', function() {
  const state = {
    foo: 1,
    bar: '2',
  };

  const action = setRuntime({
    foo: 2,
    baz: {},
  });

  expect(runtimeReducer(state, action)).toEqual({
    foo: 2,
    bar: '2',
    baz: {},
  });
});
