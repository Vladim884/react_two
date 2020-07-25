import React from 'react';
import s from'./post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
        <img src="https://nulm.gov.in/images/user.png" alt="user" width="30"/>
        <div>{props.message}</div>
        <h1>Likes</h1>
  Like: <span>{props.like}</span>
    </div>
  );
}

export default Post;
