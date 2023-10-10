import axios from 'axios';
import { API_URL } from '../config';


class UsersService {

    async signIn(signIn) {

       try {
            const resp = await axios.post(`${API_URL}/auth/signin`, signIn, {
                headers: {
                    'Content-Type': 'application/json',
                    
                }
            });
            return resp.data
       } catch (error) {
            console.log(error)
       }
    }

}
export default new UsersService()