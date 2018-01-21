import React from "react";
import {Input, Alert} from 'antd';
import {Button, Slider} from './index';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      textLength: 0,
      loading: false,
      warning: 'none',
      list: []
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
  onSubmitHandler(e) {
    e.preventDefault();
    this.setState(state => {
      return {
        list: [...state.list, state.text],
        text: ''
      }
    });
  }
  render() {
    return (
      <div>
        <div>
          ({this.state.textLength}/{this.maximumNumber})
        </div>
        <form onSubmit={(e) => this.onSubmitHandler(e)}>
          <Input.Search type="text"
                        onChange={(e) => this.onChangeHandler(e)}
                        value={this.state.text}
          />
        </form>

        <Alert style={{display: this.state.warning}} message={'15자 까지만 입력가능합니다!!!'} type="error" />

        <ul>
          {this.state.list.map((v, i) => (<li key={i}>{v}</li>))}
        </ul>
        <div>
          <Button type="primary" onClick={(e) => console.log(e)} />
          <Button onClick={(e) => console.log(e)} />
          <Slider/>
        </div>
      </div>
    );
  }
}