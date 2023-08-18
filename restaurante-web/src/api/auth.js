import axios from 'axios';



export const registrarReserva = async () => axios.post('/reserva');
export const registrarPlato = async () => axios.post('/plato');