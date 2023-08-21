import axios from 'axios';
import {API_URL, API_URL_DOCEKR} from '../config.js'



class PlatosService {

    async getPlatos(){
        try {
            const resp = await axios.get(`${API_URL_DOCEKR}/plato`);
            //ESTA RESPUIESTA VIENE CON {status (200), statusText (success), data}
            return  resp.data;
            
        } catch (error) {
            console.error(error)
        }
    }
    async savePlatos(plato){
        try {
            const resp = await axios.post(`${API_URL_DOCEKR}/post`, {
                headers:{
                    'Content-Type': 'application/json',
                    //'Authorization': 'Bearer token'
                }
            })
            return resp.data;
        } catch (error) {
            return null;
        }
    }
}

export default new PlatosService();