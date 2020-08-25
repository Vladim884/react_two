import React from "react";
// import s from "./profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getUserProfile} from './../../redux/profile_reducer';
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { userAPI } from "../../api/api";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId; // path="/profile/:userId" less.60
    if(!userId)userId = 6092;
    this.props.getUserProfile(userId);
  }
  
  render() {
    // debugger;
    if(!this.props.isAuth) return <Redirect to={'/login'} />
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps  = (state) => {
  return {
    profile: state.profileReducer.profile,
    isAuth: state.authReducer.isAuth
  }
}

let withUrlComponentContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile})(withUrlComponentContainer);
