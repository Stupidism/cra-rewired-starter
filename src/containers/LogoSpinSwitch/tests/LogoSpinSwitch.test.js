import React from 'react';
import { shallow } from 'enzyme';

import { LogoSpinSwitch, toggleLogoSpin } from '../LogoSpinSwitch';

describe('<LogoSpinSwitch />', () => {
  it('should be consistent with snapshot', () => {
    const snapshot = shallow(<LogoSpinSwitch logoSpinning />);
    expect(snapshot).toMatchSnapshot();
  });
});

describe('toggleLogoSpin({ logoSpinning, dispatch }) => handler', () => {
  it('should set runtime.logoSpinning inversely', function() {
    const dispatch = jest.fn();

    toggleLogoSpin({ logoSpinning: true, dispatch })();
    toggleLogoSpin({ logoSpinning: false, dispatch })();

    expect(dispatch.mock.calls).toMatchSnapshot();
  });
});
