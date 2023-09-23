import axios from './axios';



export const regisReservaRequest = async (reserva) => (await axios.post('/reserva', reserva));
export const registrarPlato = async (plato) => (await axios.post('/plato', plato));
export const obtenerPlatoCat = async (plato) => (await axios.get('/:categorias', plato));