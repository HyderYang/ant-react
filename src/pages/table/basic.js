import React from 'react'
import {Button, Card, Modal, Table} from "antd";
import Http from "../../http";

export default class BasicTable extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[],
      dataSource1: [],
    }
  }

  // 多选删除
  handleDelete = () => {
    let rows = this.state.selectedRows;
    let ids = [];
    rows.map((item) => {
        ids.push(item.id)
    });
    Modal.confirm({
      title: '删除',
      content: `您确定删除吗? ${ids.join(',')}`,
      onOk: () => {
        this.request();
      }
    })

  };

  onRowClick = (record, index) => {
    let selectKey = [index];

    Modal.info({
      title: '信息',
      content: `用户名: ${record.username}`
    });

    this.setState({
      selectedRowKeys: selectKey,
      selectedItem:record
    })
  };

  request = () => {
    Http.ajax({
      url: '/table/list',
      data: {
        params: {
          page:1
        }
      }
    }).then((res) => {
      res.result.list.map((item, index) => {
        item.key = index
      });
      if (res.code == 0) {
        this.setState({
          dataSource1: res.result.list,
          selectedRowKeys: [],
          selectedRows: null
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

    dataSource.map((item, index) => {
      item.key = index
    });
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
        dataIndex: 'sex',
        render(sex){
          return sex == 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        render(state) {
          let config = {
            '1': '咸鱼',
            '2': '屌丝',
            '3': '普通',
            '4': '人才',
            '5': '天才',
          };
          return config[state];
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        render(interest) {
          let config = {
            '1': '篮球',
            '2': '足球',
            '3': '动漫',
            '4': '电影',
            '5': '看书',
          };
          return config[interest];
        }
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
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    };
    const rowCheckSelection = {
      type: 'checkbox',
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        let ids = [];
        selectedRows.map((item) => {
          ids.push(item.id);
        });
        this.setState({
          selectedRowKeys,
          selectedIds: ids,
          selectedRows: selectedRows
        })
      }
    };
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

        <Card title="Mock-单选">
          <Table
            bordered
            rowSelection={rowSelection}
            onRow = {(record, index) => {
              return {
                onClick: () => {
                    this.onRowClick(record, index)
                }
              }
            }}
            columns={columns}
            dataSource={this.state.dataSource1}
            pagination={false}
          >
          </Table>
        </Card>


        <Card title="Mock-多选">
          <div>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table
            bordered
            rowSelection={rowCheckSelection}
            columns={columns}
            dataSource={this.state.dataSource1}
            pagination={false}
          >
          </Table>
        </Card>
      </div>
    );
  }
}