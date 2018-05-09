import React from 'react';
import { Switch } from 'antd';
import { compose, withHandlers } from 'recompose';

import logoSpinning from 'store/selectors/logoSpinning';
import connect from 'store/connect';
import { setRuntime } from 'store/modules/runtime';

export const LogoSpinSwitch = ({ logoSpinning, toggleLogoSpin }) => (
  <Switch checked={logoSpinning} onChange={toggleLogoSpin} />
);

export const toggleLogoSpin = ({ logoSpinning, dispatch }) => () =>
  dispatch(setRuntime({ logoSpinning: !logoSpinning }));

export default compose(
  connect({ logoSpinning }),
  withHandlers({ toggleLogoSpin }),
)(LogoSpinSwitch);
