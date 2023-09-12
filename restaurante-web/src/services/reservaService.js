import axios from "axios";
import { API_URL } from "../config";


export const saveReserva = async (reserva) => {
    try {
        const resp = await axios.post(`${API_URL}/reserva`, reserva, {
            headers:{
                'Content-Type':'application/json'
            }
        });
        return resp.arguments['0'];
    } catch (error) {
        return null
    }
}