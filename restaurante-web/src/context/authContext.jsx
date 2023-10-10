import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import Cookies from 'js-cookie'
import { authReducer } from "../reducers/authReducer";
import { useReducer } from "react";

const AuthContext = createContext();


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used with in a AuthProvider');
    return context;
}

export const AuthProvider = ({ children }) => {

    const [errors, setErrors] = useState(false);



    //AUI SE DEFINE ESTADO INICIAL

    const initialState = {
        user: null,
        isAuthenticated: false,
        loading: true
    };



    // const [reserva, setReserva] = useState(null);

    //USAMOS USEREDUCER PARA MANEJAR EL ESTADO DE AUTENTICACION
    const [authState, dispatch] = useReducer(authReducer, initialState);



    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors])

    // const regisReserva = async (reserva) => {
    //     try {
    //         const res = await regisReservaRequest(reserva);
    //         if (res.status === 200){
    //             setReserva(res.data);
    //             setIsAuthenticated(true);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         setErrors(error);
    //     }
    // }



    return (
        <AuthContext.Provider value={{ authState, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

