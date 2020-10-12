import React, { useState } from "react";
import Preloader from "../../../common/preloader/preloader";
import s from "../profile.module.css";
import userPhoto from "../../../image/user_face.jpg";
import ProfileStatusWithHooks from "./profileStatusWithHooks";
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState(false);
  // let [status, setStatus] = useState(props.status);

  if (!profile) {
    return (
      <div className={s.preloader}>
        <Preloader />
      </div>
    );
  }

  const onMyPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  const onSubmit = (formData) => {
    saveProfile(formData).then(()=>{
      setEditMode(false);
    });
     
    }
  return (
    <div className={s.profileInfo}>
      <img src={profile.photos.large || userPhoto} alt="userFace" />
      {isOwner && <input type={"file"} onChange={onMyPhotoSelected} />}
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      {editMode?<ProfileDataForm initialValues={profile} profile={profile}  onSubmit={onSubmit} />: <ProfileData goEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
 
    </div>
  );
};
const ProfileData = ({profile, isOwner, goEditMode}) => {
  return <div>
    {isOwner && <div><button onClick={goEditMode}>Edit</button></div>}
    <h3>{profile.fullName}</h3>
      <div>
        <b>Id:</b> {profile.userId}
      </div>
      <div>
        <b>About me:</b> {profile.aboutMe}
      </div>
      <div>
        <b>lookingForAJob:</b> {profile.lookingForAJob ? `yes` : "no"}
      </div>
      <div>
        <b>My professional skils:</b> {profile.lookingForAJobDescription}
      </div>
      <div>
        <h3>Contacts:</h3> {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactvalue={profile.contacts[key]} />
        })}
      </div>
  </div>
}



const Contact = ({contactTitle, contactvalue}) => {
  return <div className={s.contactData}><b>{contactTitle}:</b> {contactvalue}</div>
}

export default ProfileInfo;
