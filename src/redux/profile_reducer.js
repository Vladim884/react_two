const ADD_POST = 'ADD_POST';
const APDATE_NEW_POST_TEXT = 'APDATE_NEW_POST_TEXT';

let initiajState = {
    posts: [
        { id: 1, message: "Hello!", like: 3 },
        { id: 2, message: "Hi! How are yiu?", like: 5 },
        { id: 3, message: "Hello my dear frends!", like: 13 },
        { message: "Hi! How do yiu do?", like: 5 },
      ],
      newPostText: "it-rama",
}

const profileReducer = (state=initiajState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                like: 0,
                };
                state.posts.push(newPost);
                state.newPostText = "";
            return state;
        case APDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
    
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const newPostChangeActionCreator = (text) => ({type: APDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;