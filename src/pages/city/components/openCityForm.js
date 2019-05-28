import React from 'react'
import {Form, Select} from "antd";

const FormItem = Form.Item;
const Option = Select.Option;
class OpenCityForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 10
      },
    };

    return (
      <div>
        <Form layout="horizontal">
          <FormItem label="选择城市" {...formItemLayout} >
            {
              getFieldDecorator('city', {
                initialValue: ''
              })(
                <Select style={{width: 100}}>
                  <Option value="">全部</Option>
                  <Option value="1">北京市</Option>
                  <Option value="2">天津市</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem label="营运模式" {...formItemLayout} >
            {
              getFieldDecorator('op_mode', {
                initialValue: '1'
              })(
                <Select>
                  <Option value="1">自营</Option>
                  <Option value="2">加盟</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem label="用车模式" {...formItemLayout} >
            {
              getFieldDecorator('use_mode', {
                initialValue: '1'
              })(
                <Select>
                  <Option value="1">指定停车点</Option>
                  <Option value="2">禁停区</Option>
                </Select>
              )
            }
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(OpenCityForm);