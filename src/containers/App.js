import React from "react";
import {connect} from 'react-redux';
import 'antd/dist/antd.min.css';
import 'antd-mobile/dist/antd-mobile.css';
import './App.css';
import {toggle} from '../actions/sidebar';
import {NavBar, Drawer, Icon, List, WhiteSpace, WingBlank, Button, Flex} from 'antd-mobile';
import CardTimeLine from './CardTimeLine/CardTimeLine';
import MainSlider from './MainSlider/MainSlider';

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
          <MainSlider />
          <WhiteSpace size="lg" />
          <CardTimeLine />
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
  toggle
};

export default connect(mapStateToProps, mapDispatchToProps)(App);