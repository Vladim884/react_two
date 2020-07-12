import React from 'react';
import s from './header.module.css';
import { NavLink } from "react-router-dom";



const Header = (props) => {

  return (
    <div className={s.header}>
      <header className="header">
        <NavLink to="/profile">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51Ey3vCle7L.jpg" width="3%" alt="logo"/>
        </NavLink>
      </header>
    </div>
  );
}

export default Header;
