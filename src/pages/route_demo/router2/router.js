import React from 'react'
import {HashRouter as Router, Route, Link} from "react-router-dom";
import Main from "./Main";
import about from "../router1/About";
import topics from "../router1/Topics";
import Home from "./Home"

export default class IRouter extends React.Component{

  render() {
    return (
      <Router>
        <Home>
          <Route exact={true} path="/" component={Main} />
          <Route exact={true} path="/about" component={about} />
          <Route exact={true} path="/topics" component={topics} />
        </Home>
      </Router>
    );
  }
}