import React from 'react';
import {Route } from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
// import Nav from './components/sideBar/SideBar'
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
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
      <Header />
      <SideBar state={props.state.sidebarReducer} />
      <div className="wrapper_content">
          <Route path="/dialogs" render={ () => 
                 <DialogsContainer state={props.state.dialogsReducer} 
                 dispatch={props.dispatch}/>  } />
                
          <Route path="/profile" render={ () => <ProfileContainer /> } />
                  {/* <Profile state={props.state.profileReducer}
                  dispatch={props.dispatch}  /> } /> */}
          <Route path="/users" render={ () => 
                 <UsersContainer /> } />
          <Route path="/news" component={News} />
          <Route path="/musik" component={Musik} />
      </div>
    </div>
  );
}

export default App;
