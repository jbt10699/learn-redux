import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import allReducers from './reducers'
import { Provider } from 'react-redux';

//const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default

const store = createStore(allReducers, applyMiddleware(thunkMiddleware))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


//const store = configureStore(allReducers)

//let store = configureStore(reducer);

//STORE
//Essentially the global state  //maybe hold albumlist and isloading

//ACTION
//Describes what you want to do
//An action would be increment or find albums

//REDUCER
//Describes how your actions transform the state into the next state
//Checks which action occurs and modifies the store based on which action occurs

//toolkit way
// let store = configureStore({
//   reducer: counter
// });

//DISPATCH
//Sends the action to the reducer
