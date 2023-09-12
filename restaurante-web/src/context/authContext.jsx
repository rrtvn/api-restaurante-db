import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import {regisReservaRequest} from '../api/auth'

const AuthContext = createContext();


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used with in a AuthProvider');
    return context;
}

export const AuthProvider = ({ children }) => {
    const [reserva, setReserva] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState(false);

    

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    })

    const regisReserva = async (reserva) => {
        try {
            const res = await regisReservaRequest(reserva);
            if (res.status === 200){
                setReserva(res.data);
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.log(error);
            setErrors(error);
        }
    }

   

    


    return (
        <AuthContext.Provider
            value={{
                reserva,
                regisReserva,
                isAuthenticated,
                errors
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext; 