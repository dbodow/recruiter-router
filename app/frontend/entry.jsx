import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store.js";

document.addEventListener("DOMContentLoaded", () => {

  var http = require("http");
  setInterval(function () {
    http.get("https://recruiterrouter.herokuapp.com/#/");
  }, 300000); // every 5 minutes (300000)

  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, root);
});
