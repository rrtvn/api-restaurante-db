import axios from 'axios';
import {API_URL} from '../config.js'

class CategoriasService {

    async getCategorias(){
        try {
            const resp = await axios.get(`${API_URL}/categoria`);
            return resp.data;
            
        } catch (error) {
            console.error(error)
        }
    }

    async getCategoriasById(categoriaId){
        await axios.get(`${API_URL}/categoria/${categoriaId}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((categoria)=>{
                
                JSON.stringify(categoria.data)
                console.log(JSON.stringify(categoria.data))
                
            } )
            .catcth(console.log(error => error.message))
    }

}

export default new CategoriasService(); 