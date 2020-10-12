import React from 'react';
import s from'./profile.module.css';
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPostsReduxContainer from './my_posts/MyPostsReduxContainer';

const Profile = (props) => {
  console.log('Profile');
  // debugger;
  return (
      <div className={s.profile}>
        <ProfileInfo profile={props.profile} 
                     setUserProfile={props.setUserProfile}
                     status={props.status}
                     isOwner={props.isOwner}
                     updateStatus={props.updateStatus} 
                     saveProfile={props.saveProfile}
                     savePhoto={props.savePhoto}
                       />
        <MyPostsReduxContainer />
      </div>
  );
}

export default Profile;
