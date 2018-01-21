import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      textLength: 0
    }
  }
  onChangeHandler(e) {
    const maximumNumber = 15;
    const text = e.target.value;
    const textLength = text.length;
    if(textLength > maximumNumber) return;

    this.setState({ text, textLength });
  }
  render() {
    return (
      <div>
        <div>
          ({this.state.textLength}/15)
        </div>
        <input type="text"
               onChange={(e) => this.onChangeHandler(e)}
               value={this.state.text}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
