import React from "react";
import { connect } from "react-redux";
import s from "./users.module.css";
import Preloader from '../../common/preloader/preloader'
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers
} from "../../redux/users_reduser";
import Users from "./Users";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {

    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return <>
      <div className={s.preloader}>{this.props.isFetching === true ? <Preloader />  : null }</div>
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        toggleFollowingInProgress={this.props.toggleFollowingInProgress} 
        followingInProgress={this.props.followingInProgress}
      />
    </>;
  }
}

let mapStateToProps = (state) => {
  // debugger;
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
    followingInProgress: state.usersReducer.followingInProgress
  };
};


// let withRedirect = withAuthRedirect(UsersContainer);
export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers
}),
  // withAuthRedirect
)(UsersContainer);
