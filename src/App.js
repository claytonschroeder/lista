import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';


import Project from './containers/Project/Project';
import Home from './containers/Home/Home';

class App extends Component {

  state = {};


  render() {
    return (
      <Switch>
        <Route path="/project" component={Project}/>
        <Route path="/" component={Home}/>
      </Switch>
    );
  }
}

export default withRouter(App);
