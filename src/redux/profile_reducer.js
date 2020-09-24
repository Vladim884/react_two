import { userAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";


let initiajState = {
  posts: [
    { id: 1, message: "Hello!", like: 3 },
    { id: 2, message: "Hi! How are yiu?", like: 5 },
    { id: 3, message: "Hello my dear frends!", like: 13 },
    { id: 4, message: "Hi! How do yiu do?", like: 5 },
  ],
  profile: null,
  status: ''
};

const profileReducer = (state = initiajState, action) => {
  switch (action.type) {
    case ADD_POST:
      let idNumber = state.posts.length + 1;
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: idNumber,
            message: action.newPostText,
            like: 0,
          },
        ],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id != action.postId)
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePostActionCreator = (postId) => ({ type: DELETE_POST, postId });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const getUserProfile = (userId) => async (dispatch) => { //thunk
  const data = await userAPI.getProfile(userId);
      dispatch(setUserProfile(data));
}

export const setStatus = (status) => ({ type: SET_STATUS, status });
export const getStatus = (userId) => async (dispatch) => { //thunk
  const response = await profileAPI.getStatus(userId);
      dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => { //thunk
  const response = await profileAPI.updateStatus(status);
      if(response.data.resultCode === 0){
         dispatch(setStatus(status));
      };
}

export default profileReducer;
