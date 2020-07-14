import React from "react";
import s from "../dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>
        <img src="https://cdn.pixabay.com/photo/2012/04/01/18/22/user-23874_960_720.png" alt="user" width="14" />
      {props.name}
      </NavLink>

    </div>
  );
};

export default DialogItem;
