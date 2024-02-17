import { types } from '../actions/types';

const intialState = {
    isAuthenticated: false,
    token: null,
    error: null,
};

export const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                token: action.token,
                loading: false
            };
        case types.LOGIN_FAILURE:
            return{
                ...state,
                isAuthenticated:false,
                user: null,
                error:action.payload,

            }    
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
}