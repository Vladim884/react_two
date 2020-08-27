import React from 'react';
import Preloader from '../../../common/preloader/preloader';
import s from'../profile.module.css';
import ProfileStatus from './profileStatus'
import userPhoto from '../../../image/user_face.jpg'

const ProfileInfo = (props) => {
  if(!props.profile){
    return <div className={s.preloader}>
      <Preloader />
    </div>
  }
  // debugger;
  return (
        <div>
          <img src={props.profile.photos.large != null 
                    ? props.profile.photos.large 
                    : userPhoto } alt="userFace"/>
          <ProfileStatus status={'hello!'} />
          <h3>{props.profile.fullName}</h3>
          <div>{props.profile.userId} {props.profile.aboutMe}</div>
          <p>{props.profile.lookingForAJobDescription}</p>
          
        </div>
  );
}

export default ProfileInfo;
