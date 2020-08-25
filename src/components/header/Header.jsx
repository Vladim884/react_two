import React from "react";
import s from "./header.module.css";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const Header = (props) => {
  return (
    <div className={s.header}>
      <header className="header">
        <NavLink to="/profile">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51Ey3vCle7L.jpg"
            width="3%"
            alt="logo"
          />
        </NavLink>
          <div className={s.login_block}>
                {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
          </div>
      </header>
    </div>
  );
};

export default Header;
