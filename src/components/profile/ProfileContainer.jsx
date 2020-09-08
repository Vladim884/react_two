import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getUserProfile, updateStatus, getStatus} from '../../redux/profile_reducer';
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";//desabled
import { compose } from "redux";


class ProfileContainer extends React.Component {
  
  componentDidMount() {
    debugger;
    let userId = this.props.match.params.userId; // path="/profile/:userId" less.60
    if(!userId){
      userId = this.props.authorizedUserId;
      if(!userId){
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
    debugger;
  }
  
  render() {
    // debugger;
    return <Profile {...this.props} 
                    profile={this.props.profile} 
                    status={this.props.status}
                    updateStatus={this.props.updateStatus} />;
  }
}

let mapStateToProps  = (state) => {
  debugger;
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
  connect(mapStateToProps, {getUserProfile, updateStatus, getStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
