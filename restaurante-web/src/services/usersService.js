import axios from 'axios';
import { API_URL } from '../config';


class UsersService {

    async signIn(token) {
        

        axios.get(`${API_URL}/users/${token}`, {
            headers: {
                'Authorization': `${token}`
            },
        })
            .then((resp) => {
                console.log(resp)
                return resp.data
            })
            .catch((error) => console.log(error));
       
    }

}
export default new UsersService()