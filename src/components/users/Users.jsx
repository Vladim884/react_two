import React from "react";
import s from "./users.module.css";
import Paginator from "../../common/paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {
//   debugger;

  return (
    <div className={s.users_block}>

      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />

      {props.users.map(u => (
          <User user={u} 
                key={u.id} 
                followingInProgress={props.followingInProgress} 
                unfollow={props.unfollow} 
                follow={props.follow} />
      ))}
    </div>
  );
};

export default Users;
