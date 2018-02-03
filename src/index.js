import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './containers/App';
import {sidebarReducer} from './reducers/sidebarReducer';
import {countReducer} from './reducers/countReducer';
import {timeLineReducer} from './reducers/timeLineReducer';


const reducer = combineReducers({
  count: countReducer,
  sidebar: sidebarReducer,
  timeLine: timeLineReducer
});
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
console.log(111);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
