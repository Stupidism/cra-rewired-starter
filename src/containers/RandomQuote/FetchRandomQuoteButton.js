import React from 'react';
import { Button } from 'antd';

import connect from 'store/connect';
import {
  fetchRandomQuote,
  isRandomQuoteLoading,
} from 'store/modules/randomQuote';

import './RandomQuote.less';

export const FetchRandomQuoteButton = ({ loading, onLoad, children }) => (
  <Button type="primary" onClick={onLoad} loading={loading}>
    {children}
  </Button>
);

export default connect(
  {
    loading: isRandomQuoteLoading,
  },
  {
    onLoad: fetchRandomQuote,
  },
)(FetchRandomQuoteButton);
