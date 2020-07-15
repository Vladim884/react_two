import React from "react";
import s from "../dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>
        <img src="https://nulm.gov.in/images/user.png" alt="user" width="14" />
      {props.name}
      </NavLink>

    </div>
  );
};

export default DialogItem;
