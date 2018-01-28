import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {App} from './components';
import {sidebarReducer} from './reducers/sidebarReducer';
import {countReducer} from './reducers/countReducer';

const reducer = combineReducers({
  count: countReducer,
  sidebar: sidebarReducer
});
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
