import React from 'react'
import {HashRouter, Route, Link} from "react-router-dom";
import about from "./About"
import Main from "./Main"
import topics from "./Topics"

export default class Home extends React.Component{


  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="about">
                About
              </Link>
            </li>
            <li>
              <Link to="topics">
                Topics
              </Link>
            </li>
          </ul>

          <hr/>

          <Route exact={true} path="/" component={Main}></Route>
          <Route path="/about" component={about}></Route>
          <Route path="/topics" component={topics}></Route>
        </div>
      </HashRouter>
    );
  }

}