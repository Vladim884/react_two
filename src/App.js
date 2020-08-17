import React from 'react';
import {Route } from "react-router-dom";
import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import News from './components/news/News';
import Musik from './components/musik/Musik';
import SideBar from './components/sideBar/SideBar';
import DialogsContainer from './components/dialogs/Dialogs_Container';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/ProfileContainer';

const App = (props) => {
  // debugger;
  return (
    <div className="app_wrapper">
      <HeaderContainer />
      <SideBar state={props.state.sidebarReducer} />
      <div className="wrapper_content">
          <Route path="/dialogs" render={ () => <DialogsContainer />  } />
          <Route path="/profile/:userId?" render={ () => <ProfileContainer /> } />
          <Route path="/users" render={ () =>  <UsersContainer /> } />
          <Route path="/news" component={News} />
          <Route path="/musik" component={Musik} />
      </div>
    </div>
  );
}

export default App;
