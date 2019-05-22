import React from 'react'
import {Button, Card, notification} from "antd";

import '../ui.less'

export default class Notify extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleNotify = (type, position='topRight') => {
    notification[type]({
      message: '呵呵',
      description: '呵呵呵呵呵',
      placement: position
    })
  };

  render() {
    return (
      <div>
        <Card title="通知提醒框" className="card-wrap">
          <Button type="primary" onClick={() => {this.handleNotify('success')}}>
            通知提醒
          </Button>
          <Button type="default" onClick={() => {this.handleNotify('info')}}>
            通知提醒
          </Button>
          <Button type="danger" onClick={() => {this.handleNotify('warning')}}>
            通知提醒
          </Button>
          <Button type="ghost" onClick={() => {this.handleNotify('error')}}>
            通知提醒
          </Button>
        </Card>

        <Card title="通知提醒框弹出位置" className="card-wrap">
          <Button type="primary" onClick={() => {this.handleNotify('success', 'topLeft')}}>
            左上
          </Button>
          <Button type="default" onClick={() => {this.handleNotify('info', 'topRight')}}>
            右上
          </Button>
          <Button type="danger" onClick={() => {this.handleNotify('warning', 'bottomLeft')}}>
            左下
          </Button>
          <Button type="ghost" onClick={() => {this.handleNotify('error', 'bottomRight')}}>
            右下
          </Button>
        </Card>
      </div>
    );
  }
}