import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Input, Alert} from 'antd';
import 'antd/dist/antd.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      textLength: 0,
      loading: false,
      warning: 'none'
    };
    this.maximumNumber = 15;
  }
  onChangeHandler(e) {
    const text = e.target.value;
    const textLength = text.length;
    if(textLength > this.maximumNumber) {
      this.setState({
        warning: 'block'
      });
      return;
    }

    this.setState({ text, textLength, warning: 'none' });
  }
  render() {
    return (
      <div>
        <div>
          ({this.state.textLength}/{this.maximumNumber})
        </div>
        <Input.Search type="text"
               onChange={(e) => this.onChangeHandler(e)}
               value={this.state.text}
        />

        <Alert style={{display: this.state.warning}} message={'15자 까지만 입력가능합니다!!!'} type="error" />

        <div>
          <Button icon="search" type="primary">버튼</Button>
          <Button size="large" type="danger">버튼</Button>
          <Button loading={this.state.loading}
                  type="dashed"
                  onClick={() => {
                    this.setState({
                      loading: true
                    });
                    setTimeout(() => this.setState({
                      loading: false
                    }), 1000);
                  }}
          >
            버튼
          </Button>
        </div>
        <div>

        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
