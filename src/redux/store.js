import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reduser";
import sidebarReducer from "./sidebar_reducer";

const ADD_POST = 'ADD_POST';
const APDATE_NEW_POST_TEXT = 'APDATE_NEW_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let store = {
    _state: {
        profilePage: {
          posts: [
            { message: "Hello!", like: 3 },
            { message: "Hi! How are yiu?", like: 5 },
            { message: "Hello my dear frends!", like: 13 },
            { message: "Hi! How do yiu do?", like: 5 },
          ],
          newPostText: "it-rama",
        },
        dialogsPage: {
          dialogs: [
            { id: 1, name: "Dima" },
            { id: 2, name: "Sasha" },
            { id: 3, name: "Lena" },
            { id: 4, name: "Misha" },
            { id: 5, name: "Olya" },
            { id: 6, name: "Vasya" },
          ],
          messages: [
            { id: 1, message: "Hi!", likesCont: 12 },
            { id: 2, message: "How are you?", likesCont: 15 },
            { id: 3, message: "WELL!!", likesCont: 20 },
          ],
          newMessageText: ''
        },
        sidebar: {
          friendsName: [
            { id: 1, name: "Kolya" },
            { id: 1, name: "Olya" },
            { id: 1, name: "Tolya" },
          ],
        },
      },
      
      _callSubscriber() {
        console.log("state changed!");
      },

      subscribe (observer){
        this._callSubscriber = observer; 
      },
      getState(){
        return this._state;
      },

      dispatch(action){
          this._state.profilePage = profileReducer(this._state.profilePage, action);
          this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
          this._state.sidebar = sidebarReducer(this._state.sidebar, action);
          this._callSubscriber();
      }
      
      
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const newPostChangeActionCreator = (text) => ({type: APDATE_NEW_POST_TEXT, newText: text});
export const addMessageAC = () => ({type: ADD_MESSAGE});
export const updateNewTextAC = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
  
  export default store;
  window.store = store;
  