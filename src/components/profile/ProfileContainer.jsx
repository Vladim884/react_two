import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getUserProfile, updateStatus, getStatus, savePhoto, saveProfile} from '../../redux/profile_reducer';
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";//desabled
import { compose } from "redux";


class ProfileContainer extends React.Component {
  refreshProfile(){
    let userId = this.props.match.params.userId; // path="/profile/:userId" less.60
    if(!userId){
      userId = this.props.authorizedUserId;
      if(!userId){
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  
  componentDidMount() {
    // debugger;
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapShot){
    // debugger;
    if(this.props.match.params.userId != prevProps.match.params.userId){
      this.refreshProfile();
    }
  }
  
  render() {
    // debugger;
    return <Profile {...this.props}
                    isOwner={!this.props.match.params.userId}  //!!- will get bulean value
                    profile={this.props.profile} 
                    status={this.props.status}
                    updateStatus={this.props.updateStatus} 
                    savePhoto={this.props.savePhoto} />;
  }
}

let mapStateToProps  = (state) => {
  // debugger;
  return {
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authorizedUserId: state.authReducer.id,
    isAuth: state.authReducer.isAuth
  }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let withUrlComponentContainer = withRouter(AuthRedirectComponent)
export default compose(
  connect(mapStateToProps, {getUserProfile, updateStatus, getStatus, savePhoto, saveProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
