import React from "react";
import s from "./sideBar.module.css";
import Nav from "./nav/nav";
import MyFriendsContainer from "./my_friends/MyFriendsContainer";

const SideBar = () => {
  return (
    <div className={s.side_bar}>
      <Nav />
      <MyFriendsContainer />
    </div>
  );
};

export default SideBar;
