import { stopSubmit } from "redux-form";
import { userAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


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
    case SAVE_PHOTO_SUCCESS:
      debugger;
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
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
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

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

export const savePhoto = (file) => async (dispatch) => { //thunk
  const response = await profileAPI.savePhoto(file);
      if(response.data.resultCode === 0){
         dispatch(savePhotoSuccess(response.data.data.photos));
      };
}

export const saveProfile = (profile) => async (dispatch, getState) => { //thunk
  const userId = getState().authReducer.id;

  const response = await profileAPI.saveProfile(profile);
  debugger;
      if(response.data.resultCode === 0){
         dispatch(getUserProfile(userId));
      } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
      }
}

export default profileReducer;
