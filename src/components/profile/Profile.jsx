import React from 'react';
import s from'./profile.module.css';
import MyPosts from './my_posts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = (props) => {
  return (
      <div className={s.profile}>
        <ProfileInfo />
        <MyPosts state={props.state} />
      </div>
  );
}

export default Profile;
