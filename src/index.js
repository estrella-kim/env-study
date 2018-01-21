import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textLength: 0
    }
  }
  onChangeHandler(e) {
    this.setState({
      textLength: e.target.value.length
    });
  }
  render() {
    return (
      <div>
        <div>
          ({this.state.textLength}/15)
        </div>
        <input type="text"
               onChange={(e) => this.onChangeHandler(e)} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
