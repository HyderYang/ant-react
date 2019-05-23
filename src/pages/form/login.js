import React from 'react'
import {Button, Card, Checkbox, Form, Icon, Input, message} from "antd";

const FormItem = Form.Item;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleClick = () => {
    let info = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, value) => {
      if (!err) {
        message.success(`${info.username}当前密码为${info.password}`)
      } else {
        console.log(err)
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="用户名"/>
            </FormItem>
            <FormItem>
              <Input placeholder="密码"/>
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>

        <Card title="登录水平表单">
          <Form style={{width: 300}}>
            <FormItem>
              {
                getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空',
                    }, {
                      min:5,
                      max:10,
                      message: '长度不在范围内',
                    }
                  ]
                })(
                  <Input prefix={<Icon type={"user"} />} placeholder="用户名"/>
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  rules: []
                })(
                  <Input placeholder="密码"/>
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('remember', {
                  valuePropName:'checked',
                  initialValue:true,
                  rules: []
                })(
                  <Checkbox>记住密码</Checkbox>
                )
              }
              <a href="#" style={{float: 'right'}}>忘记密码</a>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleClick}>登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(LoginForm);
