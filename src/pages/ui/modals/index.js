import React from 'react'
import {Button, Card, Modal} from "antd";

import '../ui.less'

export default class Modals extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      confirmModal1: false,
      confirmModal2: false,
      confirmModal3: false,
      confirmModal4: false
    }
  }


  handleOpenModals = (type) => {
    this.setState({
      [type]: true
    })
  };

  handleConfirmModals = (type) => {
    Modal[type]({
      title: '确认',
      content: '确定吗?',
      onOk(){
        console.log('ok')
      },
      onCancel(){
        console.log('cancel')
      }
    })
  };

  render() {
    return (
      <div>
        <Card title="基础模态框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleOpenModals('showModal1')}>open</Button>
          <Button type="primary" onClick={() => this.handleOpenModals('showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={() => this.handleOpenModals('showModal3')}>顶部20px弹框</Button>
          <Button type="primary" onClick={() => this.handleOpenModals('showModal4')}>水平垂直居中</Button>
        </Card>

        <Card title="信息确认框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleConfirmModals('confirm')}>confirm</Button>
          <Button type="primary" onClick={() => this.handleConfirmModals('info')}>info</Button>
          <Button type="primary" onClick={() => this.handleConfirmModals('success')}>success</Button>
          <Button type="primary" onClick={() => this.handleConfirmModals('warning')}>warning</Button>
        </Card>

        <Modal
          title="React"
          visible={this.state.showModal1}
          onCancel={() => {
            this.setState({
              showModal1: false
            })
          }}
        >
          测试弹窗
        </Modal>

        <Modal
          title="React"
          visible={this.state.showModal2}
          okText="自定义确认按钮显示"
          cancelText="自定义取消按钮显示"
          onCancel={() => {
            this.setState({
              showModal2: false
            })
          }}
        >
          测试弹窗
        </Modal>

        <Modal
          title="React"
          visible={this.state.showModal3}
          style={{top: 20}}
          onCancel={() => {
            this.setState({
              showModal3: false
            })
          }}
        >
          测试弹窗
        </Modal>

        <Modal
          title="React"
          visible={this.state.showModal4}
          wrapClassName="vertical-center-modal"
          onCancel={() => {
            this.setState({
              showModal4: false
            })
          }}
        >
          测试弹窗
        </Modal>
      </div>
    );
    
  }
}