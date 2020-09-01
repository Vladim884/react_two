const ADD_MESSAGE = 'ADD_MESSAGE';

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
}

export const dialogsReducer = (state=initialState, action) => {
    
    switch (action.type) {
        case ADD_MESSAGE:
            let idNumber = state.messages.length + 1;
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: idNumber, message: body, likesCont: 0}]
            };
        default:
            return state;
    }

}

export const addMessageAC = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;

