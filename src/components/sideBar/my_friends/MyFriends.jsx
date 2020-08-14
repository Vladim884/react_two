import React from "react";
import s from "./my_friends.module.css";
import Friend from "./frend/Frend";

const MyFriends = (props) => {
  let friends = props.friends.map((f) => <Friend name={f.name} key={f.id} />);
  return (
    <div className={s.my_friends}>
      <h5>My friends</h5>
      <div className={s.friends}>{friends}</div>
    </div>
  );
};

export default MyFriends;
