import React from 'react';
import { connect } from 'react-redux';
import * as axios from "axios";
import Users from "./users";
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from './../../redux/users_reduser';

class UsersContainer extends React.Component {
    apiUrl = "https://social-network.samuraijs.com/api/1.0/";
    componentDidMount() {
      
      axios.get(`${this.apiUrl}users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
          this.props.setUsers(response.data.items);
          this.props.setUsersTotalCount(response.data.totalCount);
      });
    }
  
    onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios.get(`${this.apiUrl}users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
          this.props.setUsers(response.data.items);
          // debugger;
      });
    }
  
  
    render() {
      return <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
  
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                     />
    }
  }

let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,

    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}



// let UsersContainer = 

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);