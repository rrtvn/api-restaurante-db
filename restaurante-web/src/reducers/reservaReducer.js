import { types } from '../actions/types';

const initialState = {
    reservas: []
};

export const reservaReducer = (state=initialState, action)=>{
    switch(action.type){
        case types.guardarReserva:
            return {...state, reservas: [...state.reservas, action.payload]};
        default:
            return state;
    }
}