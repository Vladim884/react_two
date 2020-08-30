import React from "react";
import Preloader from "../../../common/preloader/preloader";
import s from "../profile.module.css";

class ProfileStatus extends React.Component {
    
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
    this.setState({editMode: true}); // setState - asynchronous
    // this.forceUpdate();
  }

  deactivateEditMode = () => {
    this.setState({editMode: false}); // setState - asynchronous
    this.props.updateStatus(this.state.status);

    // this.forceUpdate();
  }

  onChangeStatus = (e) => {
    this.setState({status: e.currentTarget.value});
   
  }
  render() {
    // debugger;
    return (
      <div>
        {!this.state.editMode && <span onDoubleClick={this.activateEditMode}>{this.props.status || 'hello'}</span>}
        {this.state.editMode && <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />}
      </div>
    );
  }
}

export default ProfileStatus;
