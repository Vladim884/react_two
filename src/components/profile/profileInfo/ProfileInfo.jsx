import React from 'react';
import Preloader from '../../../common/preloader/preloader';
import s from'../profile.module.css';

const ProfileInfo = (props) => {
  if(!props.profile){
    return <div className={s.preloader}>
      <Preloader />
    </div>
  }
  // debugger;
  return (
        <div>
          <img src={props.profile.photos.large} alt=""/>
          <h3>{props.profile.fullName}</h3>
          <div>{props.profile.userId} {props.profile.aboutMe}</div>
          <p>{props.profile.lookingForAJobDescription}</p>
          
        </div>
  );
}

export default ProfileInfo;
