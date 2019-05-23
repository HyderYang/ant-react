import React from 'react'
import {Card, Carousel} from "antd";

import '../ui.less'

export default class Carousels extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Card title="文字轮播" className="card-wrap">
          <Carousel autoplay>
            <div>
              <h3>第一Banner</h3>
            </div>
            <div>
              <h3>第二Banner</h3>
            </div>
            <div>
              <h3>第三Banner</h3>
            </div>
          </Carousel>
        </Card>

        <Card title="图片轮播" className="slider-wrap">
          <Carousel autoplay effect="fade">
            <div>
              <img src="/carousel/carousel-1.jpg" alt=""/>
            </div>
            <div>
              <img src="/carousel/carousel-2.jpg" alt=""/>
            </div>
            <div>
              <img src="/carousel/carousel-3.jpg" alt=""/>
            </div>
          </Carousel>
        </Card>
      </div>
    );
  }
}