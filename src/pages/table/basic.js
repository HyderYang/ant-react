import React from 'react'
import {Card, Table} from "antd";
import axios from 'axios';
import Http from "../../http";

export default class BasicTable extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[],
      dataSource1: [],
    }
  }

  request = () => {
    Http.ajax({
      url: '/table/list',
      data: {
        params: {
          page:1
        }
      }
    }).then((res) => {
      if (res.code == 0) {
        this.setState({
          dataSource1: res.result.list
        })
      }
    })
  };

  componentDidMount() {
    const dataSource = [
      {
        id: '0',
        username: '张三',
        sex: '1',
        state: '1',
        interest: '篮球',
        birthday: '2000-01-01',
        address: '保定市',
        time: '09:00'
      }
    ];

    this.setState({
      dataSource,
    });
    this.request();
  }

  render() {
    const columns = [
      {
        title:'id',
        dataIndex:'id'
      },
      {
        title: '用户名',
        dataIndex: 'username'
      },
      {
        title: '性别',
        dataIndex: 'sex'
      },
      {
        title: '状态',
        dataIndex: 'state'
      },
      {
        title: '爱好',
        dataIndex: 'interest'
      },
      {
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address'
      },
      {
        title: '时间',
        dataIndex: 'time'
      }
    ];
    return (
      <div>
        <Card title="基础表格">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>

        <Card title="动态表格">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource1}
            pagination={false}
          />
        </Card>
      </div>
    );
  }
}