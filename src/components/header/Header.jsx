import React from "react";
import s from "./header.module.css";
import { NavLink, Redirect } from "react-router-dom";
import * as axios from "axios";
import { connect } from "react-redux";
import { logOut } from "../../redux/auth_reducer";


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
                {props.isAuth 
                ? 
                  <div>{props.login} 
                  <button onClick={props.logOut}
                  >Log Out</button></div>
                
                : <NavLink to={"/login"}>Login</NavLink>}
          </div>
      </header>
    </div>
  );
};



export default Header;
