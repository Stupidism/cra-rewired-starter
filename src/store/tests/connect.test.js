import React from 'react';
import { shallow } from 'enzyme';

import { configureStore } from '../index';
import connect, {
  createMapStateToPropsFromStateMapper,
  whenMapStateToPropsIsObject,
} from '../connect';

describe('[store] connect(mapStateToProps: object | function): HOC', () => {
  it('should accept an object of selectors mapped by name as mapStateToProps', () => {
    const stateMock = {
      foo: 1,
      bar: jest.mock(),
    };
    const stateMapper = {
      foo: jest.fn(state => state.foo),
      bar: jest.fn(state => state.bar),
    };

    const ConnectedComponent = connect(stateMapper)(() => <div />);

    const storeMock = configureStore(stateMock);

    const wrapper = shallow(<ConnectedComponent store={storeMock} />);

    expect(stateMapper.foo).toHaveBeenCalledTimes(1);
    expect(stateMapper.foo).toBeCalledWith(stateMock);
    expect(stateMapper.bar).toHaveBeenCalledTimes(1);
    expect(stateMapper.bar).toBeCalledWith(stateMock);

    expect(wrapper.prop('foo')).toBe(stateMock.foo);
    expect(wrapper.prop('bar')).toBe(stateMock.bar);
  });
});

describe('[store] whenMapStateToPropsIsObject: factory', () => {
  it('should return undefined to let other factory works when stateMapper is not object', () => {
    expect(whenMapStateToPropsIsObject(jest.fn())).toBeUndefined();
  });
});

describe('[store] createMapStateToPropsFromStateMapper(stateMapper: object<selector>): mapStateToProps: state => object<selector(state)>', () => {
  it('should throw `Invalid selector type` error when selector is not function', () => {
    expect(
      createMapStateToPropsFromStateMapper({
        foo: {},
      }),
    ).toThrow('Invalid selector type object for stateMapper');

    expect(
      createMapStateToPropsFromStateMapper({
        foo: 1,
      }),
    ).toThrow('Invalid selector type number for stateMapper');
  });
});
