import React from "react";
import s from "./my_friends.module.css";
import Friend from './frend/Frend'
// import { NavLink } from "react-router-dom";

const MyFriends = (props) => {
    let namesData = props.state;
    let friends = namesData.map(f => <Friend name={f.name}/>);
  return (
      <div className={s.my_friends}>
         <h5>My friends</h5>
      <div className={s.friends}>
        {friends}
      </div>
        
      </div>
  );
};

export default MyFriends;
