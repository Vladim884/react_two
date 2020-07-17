const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
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
}

export const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText,
                likesCont: 0,
                };
                state.messages.push(newMessage);
                state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addMessageAC = () => ({type: ADD_MESSAGE});
export const updateNewTextAC = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
  

export default dialogsReducer;