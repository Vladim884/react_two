import React from "react";
import s from "./dialogs.module.css";
import { NavLink } from "react-router-dom";


const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <div className={s.dialog}>
            <NavLink to="/dialogs/1">Dima</NavLink>
        </div>
        <div className={s.dialog + ' ' + s.active}>
        <NavLink to="/dialogs/2">Sasha</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to="/dialogs/3">Lena</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to="/dialogs/4">Misha</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to="/dialogs/5">Olya</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to="/dialogs/6">Vasya</NavLink>
        </div>
      </div>
      <div className={s.messages}>
          <div className={s.message}>'Hi!'</div>
          <div className={s.message}>'Hello!!'</div>
          <div className={s.message}>'How are you?'</div>
      </div>
         
    </div>
    
  );
};

export default Dialogs;
