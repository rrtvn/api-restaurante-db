import { types } from "../actions/types";

const initialState = {
    platos: []
};


//action: {type; "texto", payload: cualquierCosa}
export const platosReducer = (state=initialState, action) =>{
    switch(action.type){
        case types.cargarPlatos:
            return { platos:action.payload}; 
        case types.guardarPlatos:
            return { platos:[...state.platos,action.payload]}; //...state.platos -> destructuracion del arreglo
        //TODO: Falta la de eliminacion, actualizacion en caso de utilizarse
        default:
            return state;    
    }
}