import React from 'react'
import {Col, Row} from "antd";

import Utils from '../../utils/utils'
import Http from '../../http/index'

import './index.less'

export default class Header extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      userName: '张三',
      sysTime: Utils.formatDate(new Date().getTime()),
      dailyWeatherUrl: '',
      weatherDetail: '',
      wind: '',
      temperature: ''
    }
  }

  componentWillMount() {
    setInterval(() => {
      this.setState({
        sysTime: Utils.formatDate(new Date().getTime())
      });
    }, 1000);
    this.getWeatherAPI();
  };

  getWeatherAPI() {
    let city = '保定';
    Http.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res) => {
      if (res.status === 'success') {
        let data = res.results[0].weather_data[0];
        this.setState({
          dailyWeatherUrl: data.dayPictureUrl,
          weatherDetail: data.weather,
          wind: data.wind,
          temperature: data.temperature,
        })
      }
    });
  };

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>欢迎, { this.state.userName }</span>
            <a href="#">退出</a>
          </Col>
        </Row>

        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-img">
              <img src={this.state.dailyWeatherUrl} alt='icon'/>
            </span>
            <span className="weather-detail">
              {this.state.weatherDetail} &nbsp; {this.state.wind} &nbsp; {this.state.temperature}
            </span>
          </Col>
        </Row>
      </div>
    );
  }

}