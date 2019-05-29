import React from 'react'
import {Input, Radio, Form, Select, Button, Checkbox} from "antd";
import utils from "../../utils/utils";

const FormItem = Form.Item;
const Option = Select.Option;

class BaseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleFilterSubmit = () => {
    let fieldsValue = this.props.form.getFieldsValue();
    this.props.filterSubmit(fieldsValue);
  };

  resetFilter = () => {

  };

  initFormList = () => {
    const {getFieldDecorator} = this.props.form;
    const formList = this.props.formList;
    const formItemList = [];

    if (formList && formList.length > 0) {
        formList.forEach((item, i) => {
            let label = item.label;
            let field = item.field;
            let initValue = item.initialValue || '';
            let placeholder = item.placeholder;
            let width = item.width;

            if (item.type === 'INPUT') {
              const INPUT = <FormItem label={label} key={field}>
                {
                  getFieldDecorator([field], {
                    initialValue: initValue,
                  })(
                    <Input type={"text"} placeholder={placeholder} />
                  )
                }
              </FormItem>;

              formItemList.push(INPUT)

            } else if (item.type === 'SELECT'){

              const SELECT = <FormItem label={label} key={field}>
                {
                  getFieldDecorator([field], {
                     initialValue: initValue,
                  })(
                    <Select style={{ width: width }} placeholder={placeholder}>
                      { utils.getOptionList(item.list) }
                    </Select>
                  )
                }
              </FormItem>;

              formItemList.push(SELECT)

            } else if (item.type === 'CHECKBOX '){

              const CHECKBOX = <FormItem label={label} key={field}>
                {
                  getFieldDecorator([field], {
                    valuePropName: 'checked',
                    // 必须是 true, false
                    initialValue: initValue,
                  })(
                    <Checkbox>
                      {label}
                    </Checkbox>
                  )
                }
              </FormItem>;

              formItemList.push(CHECKBOX)

            }
        })
    }

    return formItemList;
  };

  render() {
    return (
      <Form layout={"inline"}>
        { this.initFormList() }

        <FormItem>
          <Button
            type={"primary"}
            style={{margin: '0 20px'}}
            onClick={ this.handleFilterSubmit }
          >搜索</Button>
          <Button
            onClick={ this.resetFilter }
          >重置</Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(BaseForm);