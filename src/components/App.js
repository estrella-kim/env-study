import React from "react";
import {connect} from 'react-redux';
import 'antd-mobile/dist/antd-mobile.css';
import './App.css';
import {NavBar, Drawer, Icon, List, WhiteSpace, WingBlank, Button, Flex, Card, Carousel} from 'antd-mobile';

class App extends React.Component {
  constructor(props) {
    super();
    console.log(props);
  }
  onOpenChange(e) {
    console.log(e);
  }

  render() {
    const sidebar = (
      <div>
        <List>
          <List.Item key={0}
                     thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                     multipleLine
          >이용방법</List.Item>
          <List.Item key={1}
                     thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                     multipleLine
          >고객센터</List.Item>
          <List.Item key={2}
                     thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                     multipleLine
          >공지사항</List.Item>
        </List>
        <WhiteSpace size="lg" />
        <WingBlank>
          <Button type="ghost">멤버십신청</Button>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button size="small">블로그</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="small">페이스북</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
      </div>
    );

    return (
      <div>
        <NavBar icon={<Icon type="ellipsis" />} onLeftClick={()=>this.props.toggle()}>TLX</NavBar>
        <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight }}
          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 15 }}
          sidebar={sidebar}
          open={this.props.sidebar.opened}
          onOpenChange={(e) => this.onOpenChange(e)}
        >
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
          <div>
            <Flex>
              <Flex.Item>
                <Card full>
                  <Card.Header
                    title="This is title"
                    thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                    extra={<span>this is extra</span>}
                  />
                  <Card.Body>
                    <div>This is content of `Card`</div>
                  </Card.Body>
                  <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
              </Flex.Item>
            </Flex>
            <WhiteSpace size="lg" />
            <Flex>
              <Flex.Item>
                <Card full>
                  <Card.Header
                    title="This is title"
                    thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                    extra={<span>this is extra</span>}
                  />
                  <Card.Body>
                    <div>This is content of `Card`</div>
                  </Card.Body>
                  <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
              </Flex.Item>
            </Flex>
            <WhiteSpace size="lg" />
            <Flex>
              <Flex.Item>
                <Card full>
                  <Card.Header
                    title="This is title"
                    thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                    extra={<span>this is extra</span>}
                  />
                  <Card.Body>
                    <div>This is content of `Card`</div>
                  </Card.Body>
                  <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
              </Flex.Item>
            </Flex>
            <WhiteSpace size="lg" />
          </div>
        </Drawer>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
  count: state.count
});

const mapDispatchToProps = {
  toggle: function () {
    return {
      type: 'TOGGLE_SIDEBAR'
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);