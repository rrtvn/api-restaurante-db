import axios from 'axios';
import {API_URL} from '../config.js'



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

    async getPlatosByCat(cat){

        const a = cat;
        console.log(a);

        
        try {
            const resp = await axios.get(`${API_URL}/plato/${cat}` , {
                headers:{
                    'Content-Type': 'application/json',
                },
                params:{
                    name: cat
                }
            })
            return resp.data;
        } catch (error) {
            console.error(error)
        }
    }
}

export default new PlatosService();