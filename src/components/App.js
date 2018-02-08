import React from "react";
import {connect} from 'react-redux';
import 'antd-mobile/dist/antd-mobile.css';
import './App.css';
import {NavBar, Drawer, Icon, List} from 'antd-mobile';

class App extends React.Component {
  constructor(props) {
    super();
    console.log(props);
  }
  onOpenChange(e) {
    console.log(e);
  }

  render() {
    const sidebar = (<List>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
                             thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                             multipleLine
          >Category</List.Item>);
        }
        return (<List.Item key={index}
                           thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >Category{index}</List.Item>);
      })}
    </List>);

    return (
      <div>
        <NavBar icon={<Icon type="ellipsis" />} onLeftClick={()=>this.props.toggle()}>Basic</NavBar>
        <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight }}
          enableDragHandle
          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
          sidebar={sidebar}
          open={this.props.sidebar.opened}
          onOpenChange={(e) => this.onOpenChange(e)}
        >
          Click upper-left corner
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