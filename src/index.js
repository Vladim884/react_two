import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import state, { subscribe } from "./store/state";
import {addPostUA} from "./store/state";

// addPostUA('hhhh!')
let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPostUA={addPostUA}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

rerenderEntireTree();
subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
