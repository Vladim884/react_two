import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getUserProfile, updateStatus, getStatus} from '../../redux/profile_reducer';
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.match.params.userId; // path="/profile/:userId" less.60
    if(!userId){
      userId = this.props.authorizedUserId;
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
  return {
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authorizedUserId: state.authReducer.userId,
    isAuth: state.authReducer.isAuth
  }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let withUrlComponentContainer = withRouter(AuthRedirectComponent)
export default compose(
  connect(mapStateToProps, {getUserProfile, updateStatus, getStatus}),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);
