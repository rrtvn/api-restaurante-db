import axios from './axios';

export const registrarReserva = async (reserva) => axios.post('/reserva', reserva);