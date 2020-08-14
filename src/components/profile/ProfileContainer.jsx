import React from "react";
// import s from "./profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import {setUserProfile} from './../../redux/profile_reducer';
import * as axios from "axios";
import { withRouter } from "react-router-dom";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId)userId = 6092;
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/` + userId
      )
      .then((response) => {
        this.props.setUserProfile(response.data);
        // debugger;
      });
  }
  
  render() {
    // debugger;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps  = (state) => {
  return {
    profile: state.profileReducer.profile
  }
}

let withUrlComponentContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(withUrlComponentContainer);
