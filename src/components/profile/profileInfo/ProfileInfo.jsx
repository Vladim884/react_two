import React from 'react';
import Preloader from '../../../common/preloader/preloader';
import s from'../profile.module.css';
import userPhoto from '../../../image/user_face.jpg'
import ProfileStatusWithHooks from './profileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if(!profile){
    return <div className={s.preloader}>
      <Preloader />
    </div>
  }
  return (
        <div>
          <img src={profile.photos.large != null 
                    ? profile.photos.large 
                    : userPhoto } alt="userFace"/>
          <ProfileStatusWithHooks status={status}
                         updateStatus={updateStatus} />
          <h3>{profile.fullName}</h3>
          <div>{profile.userId} {profile.aboutMe}</div>
          <p>{profile.lookingForAJobDescription}</p>
          
        </div>
  );
}

export default ProfileInfo;
