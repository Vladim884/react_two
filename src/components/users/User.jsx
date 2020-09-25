import React from "react";
// import s from "./users.module.css";
import userPhoto from "../../image/user_face.jpg";
import { NavLink } from "react-router-dom";
import s from "./user.module.css";


let User = ({user, followingInProgress, unfollow, follow}) => {
//   debugger;
let u = user;

  return (

        <div className={s.userBlock}>
          <span>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={s.avaimg}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                disabled={followingInProgress.some(id => id === u.id)} 
                  onClick={() => {unfollow(u.id)}}>Unfollow</button>) 
                  : (
                <button 
                  disabled={followingInProgress.some(id => id === u.id)} 
                  onClick={ () => { follow(u.id) } } >Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>

  );
};

export default User;
