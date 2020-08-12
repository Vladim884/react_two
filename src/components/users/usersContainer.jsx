import React from 'react';
import { connect } from 'react-redux';
import * as axios from "axios";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC } from './../../redux/users_reduser';

let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
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
        
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;