import React from 'react'
import {Badge, Card, message, Modal, Table, Button} from "antd";
import Http from "../../http";
import utils from "../../utils/utils";

export default class Advance extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  state = {

  };

  params = {
    page: 1
  };

  handleDelete = (item) => {
      let id = item.id;
      Modal.confirm({
        title: '确认',
        content: '删除?',
        onOk: () => {
            message.success('删除成功');
            this.request();
        }
      })
  };

  componentDidMount() {
    this.request();
  }

  request = () => {
    let self = this;
    Http.ajax({
      url: '/table/high/list',
      data: {
        params: {
          page:this.params.page
        }
      }
    }).then((res) => {
      res.result.list.map((item, index) => {
        item.key = index
      });
      if (res.code == 0) {
        this.setState({
          dataSource: res.result.list,
        })
      }
    })
  };

  handleChange = (pagination, filter, sorter) => {
    this.setState({
      sortOrder: sorter.order
    });
  };

  render() {
    const columns = [
      {
        title:'id',
        width: 80,
        dataIndex:'id'
      },
      {
        title: '用户名',
        width: 80,
        dataIndex: 'username'
      },
      {
        title: '性别',
        width: 80,
        dataIndex: 'sex',
        render(sex){
          return sex == 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 80,
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
        width: 80,
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
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        width: 80,
        dataIndex: 'address'
      },
      {
        title: '时间',
        width: 80,
        dataIndex: 'time'
      }
    ];

    const columns1 = [
      {
        title:'id',
        width: 80,
        fixed: 'left',
        dataIndex:'id'
      },
      {
        title: '用户名',
        width: 80,
        fixed: 'left',
        dataIndex: 'username'
      },
      {
        title: '性别',
        width: 80,
        dataIndex: 'sex',
        render(sex){
          return sex == 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 80,
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
        width: 80,
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
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        width: 80,
        dataIndex: 'address'
      },
      {
        title: '地址',
        width: 80,
        dataIndex: 'address'
      },
      {
        title: '地址',
        width: 80,
        dataIndex: 'address'
      },
      {
        title: '地址',
        width: 80,
        dataIndex: 'address'
      },
      {
        title: '地址',
        width: 80,
        dataIndex: 'address'
      },
      {
        title: '地址',
        width: 80,
        dataIndex: 'address'
      },
      {
        title: '地址',
        width: 80,
        dataIndex: 'address'
      },
      {
        title: '地址',
        width: 80,
        fixed: 'right',
        dataIndex: 'address'
      },
      {
        title: '时间',
        width: 80,
        fixed: 'right',
        dataIndex: 'time'
      }
    ];

    const columns2 = [
      {
        title:'id',
        width: 80,
        dataIndex:'id'
      },
      {
        title: '用户名',
        width: 80,
        dataIndex: 'username'
      },
      {
        title: '年龄',
        width: 80,
        dataIndex: 'age',
        sorter: (a, b) => {
            return a.age - b.age
        },
        sortOrder: this.state.sortOrder
      },
      {
        title: '性别',
        width: 80,
        dataIndex: 'sex',
        render(sex){
          return sex == 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 80,
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
        width: 80,
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
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        width: 80,
        dataIndex: 'address'
      },
      {
        title: '时间',
        width: 80,
        dataIndex: 'time'
      }
    ];

    const columns4 = [
      {
        title:'id',
        width: 80,
        dataIndex:'id'
      },
      {
        title: '用户名',
        width: 80,
        dataIndex: 'username'
      },
      {
        title: '年龄',
        width: 80,
        dataIndex: 'age'
      },
      {
        title: '性别',
        width: 80,
        dataIndex: 'sex',
        render(sex){
          return sex == 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 80,
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
        width: 80,
        render(interest) {
          let config = {
            '1': <Badge status="success" text="成功" count="4"/>,
            '2': <Badge status="error" text="报错"/>,
            '3': <Badge status="default" text="正常"/>,
            '4': <Badge status="processing" text="进行中"/>,
            '5': <Badge status="warning" text="警告"/>,
          };
          return config[interest];
        }
      },
      {
        title: '生日',
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        width: 80,
        dataIndex: 'address'
      },
      {
        title: '操作',
        render: (text, item) => {
          return <Button size="small" onClick={(item) => {this.handleDelete(item)}}>删除</Button>
        }
      }
    ];
    return (
      <div>
        <Card title="头部固定">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
            scroll={{y:240}}
          />
        </Card>

        <Card title="左侧固定" style={{margin: "10px 0"}}>
          <Table
            bordered
            columns={columns1}
            dataSource={this.state.dataSource}
            pagination={false}
            scroll={{x:1200 }}
          />
        </Card>

        <Card title="排序" style={{margin: "10px 0"}}>
          <Table
            bordered
            columns={columns2}
            dataSource={this.state.dataSource}
            pagination={false}
            onChange={this.handleChange}
          />
        </Card>

        <Card title="操作按钮" style={{margin: "10px 0"}}>
          <Table
            bordered
            columns={columns4}
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>
      </div>
    );
  }
}