import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from './pages/login'
import Admin from "./Admin";
import Button from "./pages/ui/button";
import NoMatch from "./pages/no_match";

export default class IRouter extends React.Component{

  render() {
    return (
      <Router>
        <App>
          <Route path="/login" component={Login} />
          <Route path="/admin" render={() =>
            <Admin>
              <Route path="/admin/ui/buttons" component={Button}/>
              <Route component={NoMatch} />
            </Admin>
          } />
          <Route component={NoMatch} />
        </App>
      </Router>
    );
  }
}