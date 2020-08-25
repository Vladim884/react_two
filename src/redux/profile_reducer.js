import { userAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const APDATE_NEW_POST_TEXT = "APDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initiajState = {
  posts: [
    { id: 1, message: "Hello!", like: 3 },
    { id: 2, message: "Hi! How are yiu?", like: 5 },
    { id: 3, message: "Hello my dear frends!", like: 13 },
    { id: 4, message: "Hi! How do yiu do?", like: 5 },
  ],
  newPostText: "it-rama",
  profile: null,
};

const profileReducer = (state = initiajState, action) => {
  switch (action.type) {
    case ADD_POST:
      let idNumber = state.posts.length + 1;
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          {
            id: idNumber,
            message: state.newPostText,
            like: 0,
          },
        ],
      };
    case APDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const newPostChangeActionCreator = (text) => ({
  type: APDATE_NEW_POST_TEXT,
  newText: text,
});

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const getUserProfile = (userId) => (dispatch) => { //thunk
  userAPI.getProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data));
      });
}

export default profileReducer;
