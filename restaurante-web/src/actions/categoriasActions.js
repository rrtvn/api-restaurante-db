import categoriasService from '../services/categoriasService'
import {types} from './types';


const cargarCategorias = (categorias) => ({
    type : types.cargarCategorias,
    payload: categorias
});

export const startCargarCategoria = () => async (dispatch) => {

    try {
        const categorias = await categoriasService.getCategorias();
        console.log(categorias)
        if(categorias){
            dispatch(cargarCategorias(categorias));
        }
        return true;
    } catch (e) {
        console.error(e)
    }
};

