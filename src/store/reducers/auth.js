import {
    LOGIN_SUCCESS,
    LOGIN_FAIL, 
    USER_LOADED_SUCCESS, 
    USER_LOADED_FAIL,
} from "../actions/types"

const initialState = {
    auth_token: localStorage.getItem('auth_token'),
    isAuthenticated: null,
    user: null
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('auth_token', payload.auth_token);
            return{
                ...state,
                isAuthenticated: true,
                auth_token: payload.auth_token
            }
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null
            }
        case LOGIN_FAIL:
            localStorage.removeItem('auth_token');
            return{
                ...state,
                auth_token: null,
                isAuthenticated: false,
                user: null
                }
        default:
            return state
    }
}