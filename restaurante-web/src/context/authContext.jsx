
import { createContext, useContext, useEffect, useState } from "react";
// import Cookies from 'js-cookie'

import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { loginUser, logoutUser } from "../actions/authActions";

const AuthContext = createContext();


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used with in a AuthProvider');
    return context;
}

export const AuthProvider = ({ children }) => {

    const dispatch = useDispatch();
    const [session, setSession ] = useState({isAuthenticated: false, token: null})
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);
    const error = useSelector((state) => state.auth.error);
    const [token, setToken] = useState(Cookies.get('token') || null);



    //AUI SE DEFINE ESTADO INICIAL

    // const initialState = {
    //     user: null,
    //     isAuthenticated: false,
    //     loading: true
    // };

    useEffect(() => {
        if(isAuthenticated== true){
            return alert('hola mundo')
        }
    },[])



    const login = async (credentials) => {
        const res = dispatch(loginUser(credentials));
        const user = Cookies.get(res);
        console.log(user);
        return token
    }
    const logout = () => {
        dispatch(logoutUser())
    }



    return (
        <AuthContext.Provider value={{ isAuthenticated, user, dispatch, error, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

