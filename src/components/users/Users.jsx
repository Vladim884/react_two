import React from "react";
import s from "./users.module.css";
import userPhoto from "../../image/user_face.jpg";
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import { userAPI } from "../../api/api";
import { follow } from "../../redux/users_reduser";


let Users = (props) => {
//   debugger;

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.users_block}>
      <div>
        {pages.map((p) => {
          return (
            <button
              className={props.currentPage === p && s.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }} >
              {p}
            </button>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={s.user}>
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
                disabled={props.followingInProgress.some(id => id === u.id)} 
                  onClick={() => {props.unfollow(u.id)}}>Unfollow</button>) 
                  : (
                <button 
                  disabled={props.followingInProgress.some(id => id === u.id)} 
                  onClick={ () => { props.follow(u.id) } } >Follow</button>
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
      ))}
    </div>
  );
};

export default Users;
