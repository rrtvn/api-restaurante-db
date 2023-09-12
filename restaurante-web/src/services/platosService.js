import axios from 'axios';
import {API_URL, API_URL_DOCEKR} from '../config.js'



class PlatosService {

    async getPlatos(){
        try {
            const resp = await axios.get(`${API_URL}/plato` ,{
                headers:{
                    'Content-Type': 'application/json',
                }
            });
            //ESTA RESPUIESTA VIENE CON {status (200), statusText (success), data}
            
            return  resp.data;
            
        } catch (error) {
            console.error(error)
        }
    }
    async savePlato(plato){
        try {
            const resp = await axios.post(`${API_URL}/plato`, plato, {
                headers:{
                    'Content-Type': 'application/json',
                }
            })
            return resp.arguments['0'];
        } catch (error) {
            return null;
        }
    }
}

export default new PlatosService();