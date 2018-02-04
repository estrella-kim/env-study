import React from 'react';
import './MainSlider.css';
import { Carousel, Flex } from 'antd-mobile';

class MainSlider extends React.Component {
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
                      beforeChange={(from, to) => (from + to)}
                      afterChange={index => this.setState({ slideIndex: index })}
            >
              <a
                href="http://www.alipay.com"
                style={{
                  display: 'block',
                  position: 'relative',
                  boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src="https://tlxcdn.s3.amazonaws.com/images/bg/shutterstock_267830291_.jpg"
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
              <a
                href="http://www.alipay.com"
                style={{
                  display: 'block',
                  position: 'relative',
                  boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src="https://tlxcdn.s3.amazonaws.com/images/bg/shutterstock_269242565.jpg"
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
              <a
                href="http://www.alipay.com"
                style={{
                  display: 'block',
                  position: 'relative',
                  boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src="https://tlxcdn.s3.amazonaws.com/images/bg/shutterstock_269207801.jpg"
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            </Carousel>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}

export default MainSlider;