import React from 'react';
import './MainSlider.css';
import {Flex, Carousel} from 'antd-mobile';

class MainSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        'https://tlxcdn.s3.amazonaws.com/images/bg/shutterstock_267830291_.jpg',
        'https://tlxcdn.s3.amazonaws.com/images/bg/shutterstock_269242565.jpg',
        'https://tlxcdn.s3.amazonaws.com/images/bg/shutterstock_269207801.jpg'
      ]
    }
  }
  render() {
    return (
      <div className="flex-container">
        <Flex>
          <Flex.Item>
            <Carousel className="space-carousel"
                      frameOverflow="visible"
                      cellSpacing={10}
                      slideWidth={0.8}
                      autoplay
                      infinite
                      beforeChange={(from, to) => (from + to)}
                      afterChange={index => this.setState({ slideIndex: index })}
            >
              {this.state.data.map((val) => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{
                    display: 'block',
                    position: 'relative',
                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <img
                    src={val}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}

export default MainSlider;