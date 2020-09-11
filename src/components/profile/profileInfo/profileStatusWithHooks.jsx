import React, {useState, useEffect} from "react";
import Preloader from "../../../common/preloader/preloader";
import s from "../profile.module.css";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);   //synchronization when status changes in props

  let activateEditMode = () => {
    setEditMode(true);
  }

  let deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  let onChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  }

    return (
      <div>
        {!editMode && <span onDoubleClick={activateEditMode}>{props.status || '---------------'}</span>}
        {editMode && <input onChange={onChangeStatus} autoFocus={true} onBlur={deactivateEditMode} value={status} />}
      </div>
    );
  }

export default ProfileStatusWithHooks;

