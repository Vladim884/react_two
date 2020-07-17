import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reduser";
import sidebarReducer from "./sidebar_reducer";
const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer
});

let store = createStore(reducers);

export default store;