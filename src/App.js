import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Home/Dashboard/index';
import Ads from './components/ads'
import Profile from './Home/profile/index'


export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/ads" component={Ads} />

        </Switch>
      </div>
    );
  }
}
