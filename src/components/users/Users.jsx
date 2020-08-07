import React from "react";
import s from "./users.module.css";
import * as axios from "axios";

const Users = (props) => {
  let apiUrl = 'https://social-network.samuraijs.com/api/1.0/';
  axios.get(`${apiUrl}users`).then((response => {
    if (props.users.length === 0){
      props.setUsers(response.data.items);
      debugger;
    }
  }));


  
  
  return (
    <div className={s.users_block}>
      <h1>Users</h1>
      {props.users.map((u) => (
        
        <div key={u.id} className={s.user}>
          <div className={s.ava}>
            <img src={u.photos.small}
              // width="40%"
              alt="user"
            />
            <div>{u.name}</div>
          </div>
          {u.followed ?  (
            <button onClick={() => {props.unfollow(u.id)}}>follow</button>
          ) :  ( 
            <button onClick={() => {props.follow(u.id)}}>unfollow</button>
          )}
          <div>{u.status}</div>
        </div>
      ))}
    </div>
  );
};

export default Users;
