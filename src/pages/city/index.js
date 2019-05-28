import React from 'react'
import {Button, Card, Table} from "antd";
import FilterForm from "./components/filterForm";
import Http from "../../http";
import utils from "../../utils/utils";

export default class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
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

  handleOpenCity = () => {

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
      }, {
        title: '营运模式',
        dataIndex: 'op_mode',
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
      </div>
    );
  }
}