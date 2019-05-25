import React from 'react'
import {
  Button,
  Card,
  Checkbox,
  DatePicker,
  Form,
  Icon,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TimePicker,
  Upload
} from "antd";
import moment from "moment";

const FormItem = Form.Item;
const Option = Select.Option;
const TextArea = Input.TextArea;

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: null
    }
  };

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({loading: true});
      return;
    }
    if (info.file.status === 'done') {
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          avatar: imageUrl,
          loading: false
        })
      )
    }
  };

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    console.log(JSON.stringify(userInfo))
  };

  render() {
    const {getFieldDecorator} = this.props.form;
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
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4,
        }
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
                  <Input prefix={<Icon type="user"/>} placeholder="用户名"/>
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
                  <Input prefix={<Icon type="lock"/>} placeholder="密码"/>
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
                  <InputNumber/>
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
            <FormItem label="已婚" {...formItemLayout}>
              {
                getFieldDecorator('isMarried', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Switch/>
                )
              }
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {
                getFieldDecorator('birthday', {
                  initialValue: moment('2018-08-21')
                })(
                  <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                  />
                )
              }
            </FormItem>
            <FormItem label="地址" {...formItemLayout}>
              {
                getFieldDecorator('address', {
                  initialValue: '',

                })(
                  <TextArea
                    autosize={{minRows: 5, maxRows: 19}}
                  />
                )
              }
            </FormItem>
            <FormItem label="早起时间" {...formItemLayout}>
              {
                getFieldDecorator('time')(
                  <TimePicker/>
                )
              }
            </FormItem>
            <FormItem label="头像" {...formItemLayout}>
              {
                getFieldDecorator('avatar', {})(
                  <Upload
                    listType="picture-card"
                    showUploadList
                    action="//jsonplaceholder.typicode.com/posts/"
                    onChange={this.handleChange}
                  >
                    {this.state.avatar ? <img src={this.state.avatar} alt="avatar"/> : <Icon type="plus"/>}
                  </Upload>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout} >
              {
                getFieldDecorator('accept')(
                  <Checkbox>已阅读协议</Checkbox>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(Register)