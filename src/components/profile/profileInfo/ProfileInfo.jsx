import React from 'react';
import Preloader from '../../../common/preloader/preloader';
import s from'../profile.module.css';
import userPhoto from '../../../image/user_face.jpg'
import ProfileStatusWithHooks from './profileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  if(!profile){
    return <div className={s.preloader}>
      <Preloader />
    </div>
  }

  const onMyPhotoSelected = (e) => {
    if(e.target.files.length){
      savePhoto(e.target.files[0]);
    }
  }
  return (
        <div className={s.profileInfo}>
          <img src={profile.photos.large || userPhoto } alt="userFace"/>
          {isOwner && <input type={"file"} onChange={onMyPhotoSelected} />}
          <ProfileStatusWithHooks status={status}
                         updateStatus={updateStatus} />
          <h3>{profile.fullName}</h3>
          <div>{profile.userId} {profile.aboutMe}</div>
          <p>{profile.lookingForAJobDescription}</p>
          
        </div>
  );
}

export default ProfileInfo;
