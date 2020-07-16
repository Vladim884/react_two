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
          newMessageText: 'Please, enter your message!'
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
        if(action.type === 'ADD_POST'){
            let newPost = {
                message: this._state.profilePage.newPostText,
                like: 0,
              };
              this._state.profilePage.posts.push(newPost);
              this._state.profilePage.newPostText = "";
              this._callSubscriber()
        } else if(action.type === 'APDATE_NEW_POST_TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if(action.type === ADD_MESSAGE){
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText,
                likesCont: 0,
              };
              this._state.dialogsPage.messages.push(newMessage);
              this._state.dialogsPage.newMessageText = '';
              this._callSubscriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber();
        }

      }
      
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const newPostChangeActionCreator = (text) => ({type: APDATE_NEW_POST_TEXT, newText: text});
export const addMessageAC = () => ({type: ADD_MESSAGE});
export const updateNewTextAC = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
  
  export default store;
  window.store = store;
  