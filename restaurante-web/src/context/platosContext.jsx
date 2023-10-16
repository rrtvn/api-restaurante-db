import { createContext, useContext, useState } from "react";


const PlatosContext = createContext();

export const usePlato = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used with in a AuthProvider');
    return context;
}

export const PlatosProvider = ({children}) => {
    const [errors, setErrors] = useState(false)
}