import React from "react";
// import s from "./profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import {setUserProfile} from './../../redux/profile_reducer';
import * as axios from "axios";


class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/9062`
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


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
