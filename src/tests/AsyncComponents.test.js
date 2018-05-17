import React from 'react';
import { shallow } from 'enzyme';
import _ from 'lodash';

import AsyncHomePage from 'routes/HomePage';
import AsyncNotFoundPage from 'routes/NotFoundPage';

const AsyncComponents = {
  AsyncHomePage,
  AsyncNotFoundPage,
};

describe('<AsyncComponent />', () => {
  _.forEach(AsyncComponents, (AsyncComponent, name) => {
    test(`<${name} /> should render a Loader first and then itself`, async () => {
      expect(AsyncComponent.name).toEqual('LoadableComponent');
      const wrapper = shallow(<AsyncComponent />);
      expect(wrapper.dive()).toMatchSnapshot();
      await AsyncComponent.preload();
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
