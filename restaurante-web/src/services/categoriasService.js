import axios from 'axios';
import {API_URL, API_URL_DOCEKR} from '../config.js'

class CategoriasService {

    async getCategorias(){
        try {
            const resp = await axios.get(`${API_URL_DOCEKR || API_URL}/categoria`);
            console.log(resp)
            return resp.data
            
        } catch (error) {
            console.error(error)
        }
    }

}

export default new CategoriasService(); 