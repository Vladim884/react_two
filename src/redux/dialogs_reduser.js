const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

export const dialogsReducer = (state, action) => {
 if(action.type === ADD_MESSAGE){
    let newMessage = {
        id: 4,
        message: state.newMessageText,
        likesCont: 0,
        };
        state.messages.push(newMessage);
        state.newMessageText = '';
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
        state.newMessageText = action.newText;
    }
    return state;
}

export default dialogsReducer;