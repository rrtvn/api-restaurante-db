import {types} from '../actions/types';

const initialState = {
    categorias: []
};

export const categoriasReducer = (state=initialState, action) => {
    switch(action.type){
        case types.cargarCategorias:
            return {categorias:action.payload};
        default:
            return state;
    }
}