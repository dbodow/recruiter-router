import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

//testing
import { login, register, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  // we don't put the store directly on the window because
  // it can be confusing when debugging, sometimes giving you access to state
  // when you shouldn't
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!
  window.login = login;
  window.register = register;
  window.logout = logout;

  ReactDOM.render(<h1>Welcome to RecruiterRouter</h1>, root);
});
