import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reduser";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reduser";
import authReducer from './auth_reduser';
import thunkMiddleware from 'redux-thunk'



const { createStore, combineReducers, applyMiddleware } = require("redux");


let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer,
    authReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;