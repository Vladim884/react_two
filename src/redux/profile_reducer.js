const ADD_POST = 'ADD_POST';
const APDATE_NEW_POST_TEXT = 'APDATE_NEW_POST_TEXT';

const profileReducer = (state, action) => {
    if(action.type === 'ADD_POST'){
    let newPost = {
        message: state.newPostText,
        like: 0,
        };
        state.posts.push(newPost);
        state.newPostText = "";
    } else if(action.type === 'APDATE_NEW_POST_TEXT'){
        state.newPostText = action.newText;
    } 
  
    return state;
}

export default profileReducer;