import React from 'react';
import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  branch,
  renderComponent,
  mapProps,
} from 'recompose';

import { fetchRandomQuote } from 'store/modules/randomQuote';

import FetchRandomQuoteButton from './FetchRandomQuoteButton';

import './RandomQuote.less';

const RandomQuoteLoading = ({ loadingComponent }) => loadingComponent;

const RandomQuoteFailed = () => (
  <div>
    Fail to load random quote.{' '}
    <FetchRandomQuoteButton>Reload</FetchRandomQuoteButton>
  </div>
);

const RandomQuote = ({ quote, author }) => (
  <div className="RandomQuote">
    <div>{quote}</div>
    <div>-- {author}</div>
  </div>
);

export function componentDidMount() {
  if (!this.props.value) {
    this.props.fetchRandomQuote();
  }
}

export default compose(
  connect(state => state.randomQuote, { fetchRandomQuote }),
  branch(({ failed }) => failed, renderComponent(RandomQuoteFailed)),
  branch(({ loading }) => loading, renderComponent(RandomQuoteLoading)),
  lifecycle({ componentDidMount }),
  mapProps(({ value }) => ({ ...value })),
)(RandomQuote);
