import axios from "axios";
import { API_URL } from "../config";


export const saveReserva = async (reserva) => {

    const resp = await axios.post(`${API_URL}/reserva`, reserva, {
        headers:{
            'Content-Type':'application/json'
        }
    }).then((userLogin) => {
        console.log(userLogin)
    }).catch((error) => {
        console.log(error.message)
    });
    try {
        
        return resp.arguments['0'];
    } catch (error) {
        return null
    }
}