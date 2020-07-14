import React from "react";
import s from "./friend.module.css";
import { NavLink } from "react-router-dom";

const Friend = (props) => {
  return (
    <div className={s.friend}>
      <NavLink to="/dialogs">
        <img src="https://nulm.gov.in/images/user.png" alt="user" width="30" />
      </NavLink>
      <h6 className={s.friend_name}>{props.name}</h6>
    </div>
  );
};

export default Friend;
