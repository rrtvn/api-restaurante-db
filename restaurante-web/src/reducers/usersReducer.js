import {types} from '../actions/types';

const initialState = {
    users: [],
};

export const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.iniciarSesion:
            
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                loading: false
            };
    
        default:
            return state;
    }
}