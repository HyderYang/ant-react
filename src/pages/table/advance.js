import React from 'react'
import {Card, Table} from "antd";
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

  componentDidMount() {
    this.request();
  }

  request = () => {
    let self = this;
    Http.ajax({
      url: '/table/list',
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
      </div>
    );
  }
}