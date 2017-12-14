import React from "react";
import ReactDOM from "react-dom";

import Root from "./components/root";
import configureStore from "./store/store.js";

//testing
import debugMode from "./debug/debug";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
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

  // just for testing!
  debugMode(store);
  ReactDOM.render(<Root store={store} />, root);
});
