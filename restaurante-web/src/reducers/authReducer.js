import { types } from '../actions/types';

export const authReducer = (state, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                loading: false
            };
        case types.LOGOUT:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                loading: false
            };
        default:
            return state;
    }
}