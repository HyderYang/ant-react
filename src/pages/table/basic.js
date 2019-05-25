import React from 'react'
import {Card, Table} from "antd";

export default class BasicTable extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[]
    }
  }

  componentDidMount() {
    const dataSource = [
      {
        id: '0',
        username: '张三',
        sex: '1',
        status: '1',
        hobby: '篮球',
        birthday: '2000-01-01',
        address: '保定市',
        time: '09:00'
      }
    ];

    this.setState({
      dataSource,
    })
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
        dataIndex: 'status'
      },
      {
        title: '爱好',
        dataIndex: 'hobby'
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
      </div>
    );
  }
}