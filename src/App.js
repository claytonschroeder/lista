import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';


import Project from './containers/Project/Project';
import Home from './containers/Home/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
