import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        return {
            ...state,
            ...action.payload
        }
    
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});

export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(data => {
        //   debugger;
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
                
            }
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    let action = stopSubmit('login', {email: "email is wrong"});
                dispatch(action);
                return;
    authAPI.login(email, password, rememberMe).then(data => {
        //   debugger;
            if (data.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let action = stopSubmit('login', {email: "email is wrong"});
                dispatch()
            }
        });
}

export const logOut = () => (dispatch) => {
    authAPI.logOut().then(response => {
          debugger;
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer;
