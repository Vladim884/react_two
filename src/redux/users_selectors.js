export let getUserss = (state) => {
    return state.usersReducer.users
}

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