import React from 'react';
import {Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav'
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/News';
import Musik from './components/musik/Musik';


const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app_wrapper">
      <Header />
      <Nav />
      <div className="wrapper_content">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={News} />
          <Route path="/musik" component={Musik} />
      </div>
    </div>
     </BrowserRouter>
  );
}

export default App;
