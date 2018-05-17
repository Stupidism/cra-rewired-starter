import React from 'react';
import ReactLoading from 'react-loading';

import './Loading.less';

const Loading = ({
  type = 'spokes',
  color = '#262729',
  width = 64,
  height = 64,
}) => (
  <ReactLoading
    className="Loading"
    type={type}
    color={color}
    width={width}
    height={height}
  />
);

export default Loading;
