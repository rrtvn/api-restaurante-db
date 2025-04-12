
import { createContext, useContext, useEffect, useState } from "react";
// import Cookies from 'js-cookie'


import Cookies from "js-cookie";
import { loginUser, logoutUser } from "../actions/authActions";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    // const dispatch = useDispatch();
    const [user, setUser ] = useState({isAuthenticated: false})
    // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    // const users = useSelector((state) => state.auth.user);
    // const error = useSelector((state) => state.auth.error);
    // const [token, setToken] = useState(Cookies.get('token') || null);




    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            setUser({isAuthenticated: true});
        }    
    },[])



    const login = async (credentials) => {
        const res = loginUser(credentials);
        if (res) {
                
            Cookies.set('token', res, { expires: 1, secure: true, sameSite: 'strict' });
            setUser({isAuthenticated: true});
        }
    }
    const logout = () => {
        Cookies.remove("token");
        setUser({isAuthenticated: false});
    }



    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

