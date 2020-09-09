import React, {useState} from "react";
import Preloader from "../../../common/preloader/preloader";
import s from "../profile.module.css";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

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

    
// state = {
//   editMode: false,
//   status: this.props.status
// };

// activateEditMode = () => {
//   this.setState({editMode: true}); // setState - asynchronous
// }

// deactivateEditMode = () => {
//   this.setState({editMode: false}); // setState - asynchronous
//   this.props.updateStatus(this.state.status);

//   // this.forceUpdate();
// }

// onChangeStatus = (e) => {
//   this.setState({status: e.currentTarget.value});
 
// }

// componentDidUpdate(prevProps, prevState){
// if(prevProps.status !== this.props.status){
//   this.setState({status: this.props.status});
// }
// }
