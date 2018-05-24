import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from 'containers/Header';

import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Redirect exact from="/" to="/homepage" />
          <Route path="/homepage" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
