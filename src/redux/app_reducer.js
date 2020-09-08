import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { getAuthUserData } from "./auth_reducer";

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCES:
        return {
            ...state,
            initialized: true
        }
    
        default:
            return state;
    }
}

export const initializedSucces = () => ({type: INITIALIZED_SUCCES});

export const initializeApp = () => (dispatch) => {
        //   debugger;
                let promise = dispatch(getAuthUserData()); //this dispatch returned promise in auth_reucer
                // promise.then(() => {
                //     dispatch(initializedSucces());
                // });
                //ore object promises:
                Promise.all([promise])
                .then(() => {
                    dispatch(initializedSucces());
                });
                
                
            }

export default appReducer;
