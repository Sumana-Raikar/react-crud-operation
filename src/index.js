import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import { createStore, applyMiddleware} from 'redux'
//import {thunk} from 'redux-thunk'
//import {provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)))

//ReactDOM.render(<provider store={store}><App /></provider>, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
