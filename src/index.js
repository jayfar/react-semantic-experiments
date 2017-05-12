import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../semantic/dist/semantic.min.css';
import { createStore } from 'redux'
import myApp from './reducers'
import Root from './Root'

let store = createStore(myApp)

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
