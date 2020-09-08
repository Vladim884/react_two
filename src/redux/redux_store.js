import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from './auth_reducer';
import appReducer from './app_reducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'



const { createStore, combineReducers, applyMiddleware } = require("redux");


let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer,
    authReducer, 
    form: formReducer,
    app: appReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;