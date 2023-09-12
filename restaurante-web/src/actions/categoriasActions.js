import categoriasService from '../services/categoriasService'
import {types} from './types';


const cargarCategorias = (categorias) => ({
    type : types.cargarCategorias,
    payload: categorias
});

const cargarCategoriasById = (catId) => ({
    type: types.cargarCategoriasById,
    payload: catId
})

export const startCargarCategoria = () => async (dispatch) => {

    try {
        const categorias = await categoriasService.getCategorias();
        if(categorias){
            dispatch(cargarCategorias(categorias));
        }
        return true;
    } catch (e) {
        console.error(e)
    }
};

export const startCargarCategoriaById = (categoriaId) => async (dispatch) => {
    try {
        
        const catId =  categoriasService.getCategoriasById(categoriaId)
        if(catId){
            dispatch(cargarCategoriasById(catId));
        }
        return true;
    } catch (e) {
        console.error(e)
    }
}