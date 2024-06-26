import {types} from '../actions/types';

const initialState = {
    categorias: []
};

export const categoriasReducer = (state=initialState, action) => {
    switch(action.type){
        case types.cargarCategorias:
            return {categorias:action.payload};
        case types.cargarCategoriasById:
            return {cateId:action.payload.cateId};
        default:
            return state;
    }
}