import React from 'react'
import {Card, Button, Icon, Spin, Alert} from "antd";

import '../ui.less'

export default class Spinning extends React.Component{

  render() {
    const icon = <Icon type="loading"  style={{fontSize:24}} />;
    const iconPlus = <Icon type="plus"  style={{fontSize:24}} />;
    return (
      <div>
        <Card title="Spin" className="card-wrap">
          <Spin size="small"/>
          <Spin style={{margin:'0 10px'}}/>
          <Spin size="large"/>

          <Spin  indicator={icon} style={{marginLeft:10}}/>
          <Spin  indicator={iconPlus} style={{marginLeft:10}}/>
        </Card>

        <Card title="内容遮罩" className="card-wrap">
          <Alert
            message='react'
            type='info'
            description="测试测试测试文本"
          >
          </Alert>
          <Spin>
            <Alert
              message='react'
              type='warning'
              description="测试测试测试文本"
            >
            </Alert>
          </Spin>
          <Spin tip="等会...">
            <Alert
              message='react'
              type='warning'
              description="测试测试测试文本"
            >
            </Alert>
          </Spin>
          <Spin tip="等着" indicator={icon}>
            <Alert
              message='react'
              type='warning'
              description="测试测试测试文本"
            >
            </Alert>
          </Spin>
        </Card>
      </div>
    );
  }
}