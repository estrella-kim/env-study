import React from "react";
import {Input, Alert, Rate} from 'antd';
import {Button, Slider} from './index';

export default class App extends React.Component {
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
          <Button type="primary" onClick={(e) => console.log(e)} />
          <Button onClick={(e) => console.log(e)} />
          <Slider/>
        </div>
        <div>
          <Rate character={this.state.text} allowHalf={true} count={10} defaultValue={4.5} />
        </div>
      </div>
    );
  }
}