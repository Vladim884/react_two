import React from 'react';
import s from'./profile.module.css';
// import MyPosts from './my_posts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPostsContainer from './my_posts/MyPostsConteiner';

const Profile = (props) => {
  // debugger;
  return (
      <div className={s.profile}>
        <ProfileInfo />
        <MyPostsContainer state={props.state} 
                 dispatch={props.dispatch}  />
      </div>
  );
}

export default Profile;
