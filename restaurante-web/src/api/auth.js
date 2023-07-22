import axios from 'axios';

const API = 'http://localhost:4010/api';

export const registrarReserva = reserva => axios.post( API  + '/reserva', reserva);