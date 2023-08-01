import axios from 'axios';
import {API_URL} from '../config.js'



class PlatosService {

    async getPlatos(){
        try {
            const resp = axios.get(`${API_URL}/plato`);
            console.log(resp)
            //ESTA RESPUIESTA VIENE CON {status (200), statusText (success), data}
            return (await resp).data;
            
        } catch (error) {
            return null;
        }
    }
    async savePlatos(plato){
        try {
            const resp = await axios.post(`${API_URL}/post`, {
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