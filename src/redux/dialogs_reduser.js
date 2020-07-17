const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

export const dialogsReducer = (state, action) => {
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