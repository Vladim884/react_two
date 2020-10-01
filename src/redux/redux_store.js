import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from './auth_reducer';
import appReducer from './app_reducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'



const { createStore, combineReducers, applyMiddleware, compose } = require("redux");


let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer,
    authReducer, 
    form: formReducer,
    app: appReducer

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window._store_ = store;

export default store;