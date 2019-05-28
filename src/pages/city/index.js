import React from 'react'
import {Button, Card, message, Modal, Table} from "antd";
import Http from "../../http";
import utils from "../../utils/utils";

import FilterForm from "./components/filterForm";
import OpenCityForm from "./components/openCityForm";

export default class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowOpenCity: false
    }
  }

  params = {
    page: 1
  };

  componentDidMount() {
    this.requestList();
  };

  requestList = () => {
    let self = this;
    Http.ajax({
      url: '/open_city',
      data: {
        params: {
          page: this.params.page
        }
      }
    }).then((res) => {
        this.setState({
          list: res.result.item_list.map((item, index) => {
              item.key = index;
              return item;
          }),
          pagination: utils.pagination(res, (current) => {
              self.params.page = current;
              self.requestList();
          })
        })
    })
  };

  // 显示开通城市弹窗
  handleOpenCity = () => {
    this.setState({
      isShowOpenCity: true,
    })
  };

  // 开通城市提交
  handleSubmit = () => {
    let cityInfo = this.cityForm.props.form.getFieldsValue();

    Http.ajax({
      url: '/city/open',
      data: {
        params: cityInfo
      }
    }).then((res) => {
      if (res.code == '0') {
        message.success('开通成功');
        this.setState({
          isShowOpenCity: false
        });
        this.requestList();
      }
    })
  };

  render() {
    const columns = [
      {
        title: '城市ID',
        dataIndex: 'id',
      }, {
        title: '城市名称',
        dataIndex: 'name',
      }, {
        title: '用车模式',
        dataIndex:'mode',
        render(mode){
          return mode == 1 ? '禁停区':"停车点"
        }
      }, {
        title: '营运模式',
        dataIndex: 'op_mode',
        render(mode){
          return mode ==1 ? '自营':'加盟'
        }
      }, {
        title: '授权加盟商',
        dataIndex: 'franchisee_name'
      }, {
        title: '城市管理员',
        dataIndex: 'city_admins',
        render(admins){
          return admins.map((admin) => {
              return admin.user_name;
          }).join(',');
        }
      },{
        title: '操作时间',
        dataIndex: 'update_time',
        render(time){
          return utils.formatDate(time);
        }
      },{
        title: '操作人',
        dataIndex: 'sys_user_name',
      }
    ];

    return (
      <div>
        <Card>
          <FilterForm/>
        </Card>

        <Card style={{marginTop: 10}}>
          <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
        </Card>

        <div className="content-wrap">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
          />
        </div>

        <Modal
          title="开通城市"
          visible={this.state.isShowOpenCity}
          onOk={this.handleSubmit}
          onCancel={() => {
              this.setState({
                isShowOpenCity: false
              })
          }}
        >
          <OpenCityForm wrappedComponentRef={(inst) => {
              this.cityForm = inst;
          }} />
        </Modal>
      </div>
    );
  }
}