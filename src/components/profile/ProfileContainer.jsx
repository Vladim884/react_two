import React from "react";
// import s from "./profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getUserProfile} from './../../redux/profile_reducer';
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId; // path="/profile/:userId" less.60
    if(!userId)userId = 6092;
    this.props.getUserProfile(userId);
  }
  
  render() {
    // debugger;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps  = (state) => {
  return {
    profile: state.profileReducer.profile,
  }
}

let withUrlComponentContainer = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {getUserProfile})(withUrlComponentContainer);
