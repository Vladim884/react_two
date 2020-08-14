import React from 'react';
import s from'./profile.module.css';
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPostsReduxContainer from './my_posts/MyPostsReduxContainer';

const Profile = (props) => {
  debugger;
  return (
      <div className={s.profile}>
        <ProfileInfo profile={props.profile} setUserProfile={props.setUserProfile} />
        <MyPostsReduxContainer />
      </div>
  );
}

export default Profile;
