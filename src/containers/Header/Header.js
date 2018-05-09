import React from 'react';

import connect from 'store/connect';
import logoSpinning from 'store/selectors/logoSpinning';

import logo from 'assets/logo.svg';

import './Header.less';

export const HeaderRenderer = ({ logoSpinning }) => (
  <header className="Header">
    <img
      src={logo}
      className={`Logo ${logoSpinning ? '' : 'LogoSpinPaused'}`}
      alt="logo"
    />
    <h1 className="Title">Welcome to React</h1>
  </header>
);

export default connect({ logoSpinning })(HeaderRenderer);
