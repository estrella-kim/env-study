import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {App} from './components';
import {sidebarReducer} from './reducers/sidebarReducer';
import {countReducer} from './reducers/countReducer';
import { productReducer } from './reducers/productReducer';

const reducer = combineReducers({
  count: countReducer,
  sidebar: sidebarReducer,
  productList: productReducer
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
