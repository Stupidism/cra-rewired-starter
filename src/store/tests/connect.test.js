import React from 'react';
import { shallow } from 'enzyme';

import { configureStore } from '../index';
import connect from '../connect';

test('[store/connect] should accept an object of selectors mapped by name as mapStateToProps', () => {
  const selectFoo = jest.fn(state => state.foo);
  const selectBar = jest.fn(state => state.bar);

  const ConnectedComponent = connect({
    foo: selectFoo,
    bar: selectBar,
  })(() => <div />);

  const stateMock = {
    foo: 1,
    bar: jest.mock(),
  };

  const storeMock = configureStore(stateMock);

  const wrapper = shallow(<ConnectedComponent store={storeMock} />);

  expect(selectFoo).toHaveBeenCalledTimes(1);
  expect(selectFoo).toBeCalledWith(stateMock);
  expect(selectBar).toHaveBeenCalledTimes(1);
  expect(selectBar).toBeCalledWith(stateMock);

  expect(wrapper.prop('foo')).toBe(stateMock.foo);
  expect(wrapper.prop('bar')).toBe(stateMock.bar);
});
