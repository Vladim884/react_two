import React from 'react';
import Preloader from '../../../common/preloader/preloader';
// import s from'./profile.module.css';

const ProfileInfo = (props) => {
  if(!props.profile){
    return <div>
      <Preloader />
    </div>
  }
  debugger;
  return (
        <div>
          {props.profile.userId}
        </div>
  );
}

export default ProfileInfo;
