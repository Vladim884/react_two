import React from "react";
import { connect } from "react-redux";
import s from "./users.module.css";
import Preloader from '../../common/preloader/preloader'
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingInProgress,
    requestUsers
} from "../../redux/users_reducer";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress
} from '../../redux/users_selectors'
import Users from "./Users";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.requestUsers(pageNumber, this.props.pageSize);
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

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersReducer.users,
//     pageSize: state.usersReducer.pageSize,
//     totalUsersCount: state.usersReducer.totalUsersCount,
//     currentPage: state.usersReducer.currentPage,
//     isFetching: state.usersReducer.isFetching,
//     followingInProgress: state.usersReducer.followingInProgress
//   };
// };

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
};


export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingInProgress,
    requestUsers
}),
  // withAuthRedirect
)(UsersContainer);
