import React from 'react'

export default class About extends React.Component {


  render() {
    return (
      <div>
        动态路由测试
        {this.props.match.params.mainID}
      </div>
    );
  }

}