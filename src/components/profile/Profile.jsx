import React from 'react';
import s from'./profile.module.css';
import MyPosts from './my_posts/MyPosts';

const Profile = (props) => {
  return (
      <div className={s.profile}>
        <div>
          ava + descript
        </div>
        <MyPosts store={props.store} />
      </div>
  );
}

export default Profile;
