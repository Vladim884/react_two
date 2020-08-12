import React from "react";
import s from "./../sideBar.module.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.activeLink}>
            Profile
          </NavLink>
        </div>
        <div className={`${s.item}`}>
          <NavLink to="/dialogs" activeClassName={s.activeLink}>
            Dialogs
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.activeLink}>
            News
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/musik" activeClassName={s.activeLink}>
            Musik
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/users" activeClassName={s.activeLink}>
            Users
          </NavLink>
        </div>
        <div className={s.item}>
          <a>Settings</a>
        </div>
      </nav>
  );
};

export default Nav;
