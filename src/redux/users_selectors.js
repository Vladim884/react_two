import { createSelector } from "reselect";

export let getUsersFirstStep = (state) => {
    return state.usersReducer.users;
}

export const getUsers = createSelector(getUsersFirstStep, (users) => { // without unnecessary rerendering
    return users.filter(u => true);
});

export let getPageSize = (state) => {
    return state.usersReducer.pageSize
}
export let getTotalUsersCount = (state) => {
    return state.usersReducer.totalUsersCount
}
export let getCurrentPage = (state) => {
    return state.usersReducer.currentPage
}

export let getIsFetching = (state) => {
    return state.usersReducer.isFetching
}

export let getFollowingInProgress = (state) => {
    return state.usersReducer.followingInProgress
}