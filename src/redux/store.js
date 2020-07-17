import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reduser";
import sidebarReducer from "./sidebar_reducer";

let store = {
    _state: {
        profilePage: {
          posts: [
            { id: 1, message: "Hello!", like: 3 },
            { id: 2, message: "Hi! How are yiu?", like: 5 },
            { id: 3, message: "Hello my dear frends!", like: 13 },
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
            { id: 7, message: "Hi!", likesCont: 12 },
            { id: 8, message: "How are you?", likesCont: 15 },
            { id: 9, message: "WELL!!", likesCont: 20 },
          ],
          newMessageText: ''
        },
        sidebar: {
          friendsName: [
            { id: 11, name: "Kolya" },
            { id: 12, name: "Olya" },
            { id: 13, name: "Tolya" },
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

  export default store;
  window.store = store;
  