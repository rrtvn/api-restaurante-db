import {saveReserva} from "../services/reservaService";
import {types} from './types'

const guardarReserva = (reserva) => ({
    type: types.guardarReserva,
    payload: reserva
})

export const startGuardarReserva = (reserva) => {
    return async(dispatch)=>{
        reserva = await saveReserva(reserva);
        if (reserva != null) {
            dispatch(guardarReserva(reserva))
        }
        return reserva
    }
}