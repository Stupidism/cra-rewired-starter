import React from 'react';
import { shallow } from 'enzyme';

import HomePage, { goToDependencies, goToDevDependencies } from '../HomePage';

describe('<HomePage />', () => {
  describe('should be consistent with snapshots', () => {
    it('when accessing "/homepage"', () => {
      const props = {
        location: { pathname: '/homepage' },
        match: { url: '/homepage' },
      };
      const snapshot = shallow(<HomePage {...props} />).until();
      expect(snapshot).toMatchSnapshot();
    });

    it('when accessing "/homepage/dependencies"', () => {
      const props = {
        location: { pathname: '/homepage/dependencies' },
        match: { url: '/homepage' },
      };
      const snapshot = shallow(<HomePage {...props} />).until();
      expect(snapshot).toMatchSnapshot();
    });

    it('when accessing "/homepage/dev-dependencies"', () => {
      const props = {
        location: { pathname: '/homepage/dev-dependencies' },
        match: { url: '/homepage' },
      };
      const snapshot = shallow(<HomePage {...props} />).until();
      expect(snapshot).toMatchSnapshot();
    });

    it('when accessing "/homepage/not-found"', () => {
      const props = {
        location: { pathname: '/homepage/not-found' },
        match: { url: '/homepage' },
      };
      const snapshot = shallow(<HomePage {...props} />).until();
      expect(snapshot).toMatchSnapshot();
    });
  });

  test('[handlers] goToDependencies({ history, dependenciesUrl }) => handler', () => {
    const history = {
      push: jest.fn(),
    };
    const dependenciesUrl = 'fake-dependencies-url';

    goToDependencies({ history, dependenciesUrl })();
    expect(history.push).toHaveBeenCalledWith(dependenciesUrl);
  });

  test('[handlers] goToDevDependencies({ history, devDependenciesUrl }) => handler', () => {
    const history = {
      push: jest.fn(),
    };
    const devDependenciesUrl = 'fake-dev-dependencies-url';

    goToDevDependencies({ history, devDependenciesUrl })();
    expect(history.push).toHaveBeenCalledWith(devDependenciesUrl);
  });
});
