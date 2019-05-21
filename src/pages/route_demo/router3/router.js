import React from 'react'
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Main from "./Main";
import Info from "./Info";
import about from "../router1/About";
import topics from "../router1/Topics";
import Home from "./Home"
import NoMatch from './NoMatch'


export default class IRouter extends React.Component{

  render() {
    return (
      <Router>
        <Home>
          <Switch>
            <Route path="/main" render={() =>
              <Main>
                <Route path="/main/:mainID" component={Info} />
              </Main>
            }/>
            <Route exact={true} path="/about" component={about} />
            <Route exact={true} path="/topics" component={topics} />
            <Route component={NoMatch}/>
          </Switch>
        </Home>
      </Router>
    );
  }
}