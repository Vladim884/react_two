import React from "react";
import s from "./sideBar.module.css";
import { NavLink } from "react-router-dom";
import Nav from "./nav/nav";
import MyFriends from "./my_friends/MyFriends";

const SideBar = (props) => {
  debugger;
  return (
    <div className={s.side_bar}>
      <Nav />
      <MyFriends state={props.state} />
    </div>
  );
};

export default SideBar;
