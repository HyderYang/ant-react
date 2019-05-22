import React from 'react'
import {Card, message, Button, Tabs, Icon} from "antd";

import '../ui.less'

export default class Tab extends React.Component{
  newTabIndex = 1;

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    const panes = [
      {
        title:'Tab 1',
        content: 'Tab 1',
        key:'1'
      },
      {
        title: 'Tab 2',
        content: 'Tab 2',
        key: '2'
      },
      {
        title: 'Tab 3',
        content: 'Tab 3',
        key: '3'
      }
    ];

    this.setState({
      activeKey: panes[0].key,
      panes
    })
  }

  onChange = (activeKey) => {
    this.setState({
      activeKey
    })
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey)
  };

  add = () => {
    const panes = this.state.panes;
    const activeKey = `Tab${this.newTabIndex++}`;
    panes.push({ title: 'NewTab', content: 'NewTabPane', key: activeKey});
    this.setState({
      panes,
      activeKey
    })
  };

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });

    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({
      panes,
      activeKey
    })
  };

  handleCallback = (key) => {
    message.info('选择了' + key + '页签')
  };

  render() {
    const TabPane = Tabs.TabPane;
    return (
      <div>
        <Card title="tab页签" className="card-wrap">
          <Tabs defaultActiveKey='1' onChange={this.handleCallback}>
            <TabPane tab="页签1" key="1">this is tab 1</TabPane>
            <TabPane tab="页签2" key="2">this is tab 2</TabPane>
            <TabPane tab="页签3" key="3">this is tab 3</TabPane>
          </Tabs>
        </Card>

        <Card title="tab图标页签" className="card-wrap">
          <Tabs defaultActiveKey='1' onChange={this.handleCallback}>
            <TabPane tab={<span><Icon type="plus" />Tab1</span>} key="1">this is tab 1</TabPane>
            <TabPane tab={<span><Icon type="edit" />Tab2</span>} key="2">this is tab 2</TabPane>
            <TabPane tab={<span><Icon type="delete" />Tab3</span>} disabled key="3">this is tab 3</TabPane>
          </Tabs>
        </Card>

        <Card title="可编辑页签" className="card-wrap">
          <Tabs
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {
              this.state.panes.map((pane) => {
                return (
                  <TabPane tab={pane.title} key={pane.key} />
                )
              })
            }
          </Tabs>
        </Card>
      </div>
    );
  }
}