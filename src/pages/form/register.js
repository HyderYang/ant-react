import React from 'react'
import {Card, Form, Icon, Input, InputNumber, Radio, Select} from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 20
      }
    };
    return (
      <div>
        <Card title="注册表单">
          <Form layout="horizontal">
            <FormItem label="用户名" {...formItemLayout}>
              {
                getFieldDecorator('username', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空',
                    }
                  ]
                })(
                  <Input prefix={<Icon type="user" />} placeholder="用户名"/>
                )
              }
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {
                getFieldDecorator('password', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '密码不能为空'
                    }
                  ]
                })(
                  <Input prefix={<Icon type="lock" />} placeholder="密码"/>
                )
              }
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              {
                getFieldDecorator('sex', {
                  initialValue: ''
                })(
                  <Radio.Group>
                    <Radio value={1}>男</Radio>
                    <Radio value={2}>女</Radio>
                  </Radio.Group>
                )
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  initialValue: 18
                })(
                  <InputNumber />
                )
              }
            </FormItem>
            <FormItem label="状态" {...formItemLayout}>
              {
                getFieldDecorator('status', {
                  initialValue: '3'
                })(
                  <Select>
                    <Option value="1">入门</Option>
                    <Option value="2">熟练</Option>
                    <Option value="3">精通</Option>
                    <Option value="4">问道</Option>
                    <Option value="5">康复指南</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {
                getFieldDecorator('hobby', {
                  initialValue: ['1', '2']
                })(
                  <Select mode="multiple">
                    <Option value="1">美食</Option>
                    <Option value="2">篮球</Option>
                    <Option value="3">足球</Option>
                    <Option value="4">旅行</Option>
                    <Option value="5">电影</Option>
                    <Option value="6">阅读</Option>
                    <Option value="7">游戏</Option>
                    <Option value="8">跳舞</Option>
                  </Select>
                )
              }
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(Register)