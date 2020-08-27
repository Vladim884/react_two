import React from "react";
import Preloader from "../../../common/preloader/preloader";
import s from "../profile.module.css";

class ProfileStatus extends React.Component {
    // debugger;
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({editMode: true}); // setState - asynchronous
    // this.forceUpdate();
  }

  deactivateEditMode= () => {
    this.setState({editMode: false}); // setState - asynchronous
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        {!this.state.editMode && <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>}
        {this.state.editMode && <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />}
      </div>
    );
  }
}

export default ProfileStatus;
