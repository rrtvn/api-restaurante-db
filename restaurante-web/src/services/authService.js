import axios from "axios";
import { API_URL } from "../config";
import Cookies from "js-cookie";


class AuthService {

    async signin(email, password) {

        const resp = await axios.post(`${API_URL}/auth/signin`, {email, password});
        const {token, user} = resp.data;

        Cookies.set("token", token, { expires: 1 });

        return user;
    }

    async logout() {
        Cookies.remove("token");
    }

}
export default new AuthService();