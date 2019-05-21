import React from 'react'
import {Card, Button, Icon, Radio} from "antd";

import '../ui.less'

export default class Buttons extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      loadingText: "关闭loading",
      size: "default"
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextState.loading === false) {
      nextState.loadingText = '开启loading'
    } else {
      nextState.loadingText = '关闭loading'
    }

    return true
  }

  handleTriggerLoading = () => {
    this.setState({
      loading: !this.state.loading
    });
  };

  handleSwitchButtonSize = (e) => {
    this.setState({
      size:e.target.value
    })
  };

  render() {
    return (
      <div>
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">确认</Button>
          <Button>默认</Button>
          <Button type="dashed">虚线</Button>
          <Button type="danger">删除</Button>
          <Button disabled>禁用</Button>
        </Card>

        <Card title="图形按钮" className="card-wrap">
          <Button icon="plus" >创建</Button>
          <Button icon="edit" >编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search" />
          <Button type="primary" icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>

        <Card title="Loading按钮" className="card-wrap">
          <Button icon="plus" type="primary" loading={this.state.loading}>确定</Button>
          <Button shape="circle" loading={this.state.loading} />
          <Button loading={this.state.loading}>点击加载</Button>
          <Button shape="circle" loading={this.state.loading} />
          <Button type="primary" onClick={this.handleTriggerLoading}>{this.state.loadingText}</Button>
        </Card>

        <Card title="按钮组">
          <Button.Group>
            <Button type="primary" icon="left">后退</Button>
            <Button type="primary">
              前进
              <Icon type="right"></Icon>
            </Button>
          </Button.Group>
        </Card>

        <Card title="按钮尺寸">
          <Radio.Group value={this.state.size} onChange={this.handleSwitchButtonSize}>
            <Radio value="small">小</Radio>
            <Radio value="default" checked={true}>中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>确认</Button>
          <Button size={this.state.size}>默认</Button>
          <Button type="dashed" size={this.state.size}>虚线</Button>
          <Button type="danger" size={this.state.size}>删除</Button>
        </Card>
      </div>
    );
  }
}