// import React from "react";
import { connect } from "react-redux";
import MyFriends from "./MyFriends";

let mapStateTpProps = (state) => {
  debugger;
  return {
    friends: state.sidebarReducer.friends
  }
}

let MyFriendsContainer = connect(mapStateTpProps)(MyFriends);

export default MyFriendsContainer;
