import React from "react";
import s from "./my_friends.module.css";
import Friend from './frend/Frend'
import { connect } from "react-redux";
import MyFriends from "./MyFriends";
// import { NavLink } from "react-router-dom";

// const MyFriendsContainer = (props) => {
//   // debugger;
//     // let namesData = props.state.friendsName;
//     let friends = props.state.friendsName.map(f => <Friend name={f.name} key={f.id} />);
//   return (
//       <div className={s.my_friends}>
//          <h5>My friends</h5>
//       <div className={s.friends}>
//         {friends}
//       </div>
        
//       </div>
//   );
// };

let mapStateTpProps = (state) => {
  debugger;
  return {
    friendsData: state.sidebarReducer.friendsName
  }
}

let MyFriendsContainer = connect(mapStateTpProps)(MyFriends);

export default MyFriendsContainer;
