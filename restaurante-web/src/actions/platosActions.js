import platosService from "../services/platosService";
import {types} from './types';

const guardarPlato = (plato) =>({
    type: types.guardarPlatos,
    payload: plato
});

const cargarPlatos = (platos) => ({  //recibe arreglo de mediciones
    type: types.cargarPlatos,
    payload: platos
});

export const startCargarPlato = () => async (dispatch)=>{ //es una funcion que retorna una funcion asincronica que recibe un dispatch. dispatch es un objeto que perimte lanzar acciones en react

    try {
        const platos = await platosService.getPlatos();
        if (platos) {
            dispatch(cargarPlatos(platos));
        }
        return true;
    } catch (e) {
        return false
    }
};

export const startGuardarPlatos = (plato) => {
    return async(dispatch)=>{
        plato = await platosService.savePlato(plato);
        if(plato != null ){
            dispatch(guardarPlato(plato))
        }
    }
}