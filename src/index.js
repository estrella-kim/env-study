import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button'

function App() {
  return (
    <div>
      Hello React World!!!
      <div>
        <Button/>
      </div>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('app'));
