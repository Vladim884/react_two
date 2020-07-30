import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reduser";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reduser.js";



const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;