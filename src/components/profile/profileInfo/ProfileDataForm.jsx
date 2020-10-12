import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../../common/FormControl/Formscontrol";
import s from "../profile.module.css";
import style from '../../../common/FormControl/formControl.module.css';


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
    {<div><button>Save</button></div>}
    <div>
        {error && <div className={style.formSummaryError}>
        {error}</div>}
    </div>
    <div><b>Full name: </b>{createField("Full name", "fullName", Input, [])} </div>
      <div>
        <b>Id:</b> {profile.userId}
      </div>
      <div>
        <b>About me:</b> {createField("About me", "aboutMe", Textarea, [])}
      </div>
      <div>
        <b>lookingForAJob:</b> {createField("", "lookingForAJob", Input, [], {type: 'checkbox'})}
      </div>
      <div>
        <b>My professional skils:</b> {createField("My professional skils", "lookingForAJobDescription", Textarea, [])}
      </div>
      <div>
        <h3>Contacts:</h3> {Object.keys(profile.contacts).map(key => {
        //   return <Contact key={key} contactTitle={key} contactvalue={profile.contacts[key]} />
        return <div key={key} className="s.contact">
            <b>{key}: </b>{createField(key, "contacts." + key, Input, [])}
        </div>
        })}
      </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile', })(ProfileDataForm);

export default ProfileDataFormReduxForm;