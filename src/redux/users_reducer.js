import { userAPI } from "../api/api";
import { updateObjectInArrey } from "../utils/object_helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [ ],
  pageSize: 100,
  totalUsersCount: 200,
  currentPage: 38,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArrey(state.users, action.userId, "id", {
          followed: true,
        }),
        // users: state.users.map( u =>  {
        //     if (u.id === action.userId) {
        //         return {...u, followed: true}
        //     }
        //     return u;
        // })
      };
    case UNFOLLOW:
      return {
        ...state,
        // users: state.users.map((u) => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: false };
        //   }
        //   return u;
        // }),
        users: updateObjectInArrey(state.users, action.userId, "id", {
            followed: false,
          }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
};

export const followSucces = (userId) => ({ type: FOLLOW, userId });
export const unfollowSucces = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersTotalCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingInProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (page, pageSize) => async (dispatch) => {
  //thunk
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));
  const data = await userAPI.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setUsersTotalCount(data.totalCount));
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  //common logic function
  dispatch(toggleFollowingInProgress(true, userId));
  const data = await apiMethod(userId);
  if (data.resultCode == 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingInProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
  //thunk
  followUnfollowFlow(
    dispatch,
    userId,
    userAPI.follow.bind(userAPI),
    followSucces
  );
};

export const unfollow = (userId) => async (dispatch) => {
  //thunk
  followUnfollowFlow(
    dispatch,
    userId,
    userAPI.unfollow.bind(userAPI),
    unfollowSucces
  );
};

export default usersReducer;
