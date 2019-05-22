import React from 'react'
import {Button, Card, message} from "antd";

import '../ui.less'

export default class Messages extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleNotify = (type, position='topRight') => {
    message[type]("呵呵呵呵呵呵")
  };

  render() {
    return (
      <div>
        <Card title="全局提示" className="card-wrap">
          <Button type="primary" onClick={() => {this.handleNotify('success')}}>
            success
          </Button>
          <Button type="default" onClick={() => {this.handleNotify('info')}}>
            info
          </Button>
          <Button type="danger" onClick={() => {this.handleNotify('warning')}}>
            warning
          </Button>
          <Button type="ghost" onClick={() => {this.handleNotify('error')}}>
            error
          </Button>
          <Button type="ghost" onClick={() => {this.handleNotify('loading')}}>
            loading
          </Button>
        </Card>

      </div>
    );
  }
}