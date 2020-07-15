import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from './redux/store'
// import state, { subscribe } from "./store/state";
// import {addPostUA, addMessageUA, newPostChange} from "./store/state";

// addPostUA('hhhh!')
// console.log(store);
let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={store.getState()} 
             addPostUA={store.addPostUA.bind(store)} 
             addMessageUA={store.addMessageUA.bind(store)} 
             newPostChange={store.newPostChange.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
