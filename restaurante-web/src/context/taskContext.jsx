import { createContext, useContext ,useState } from "react";

import { registrarReserva } from "../api/task"


const TaskContext = createContext();

export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error("useTask must be used within a TaskProvider");
    return context;

}

export function TaskProvider({ children }) {
    const [reservas, setReserva] = useState([]);

    const createReserva = async (reserva) => {
        try {
            const res = await registrarReserva(reserva);
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TaskContext.Provider
            value={{
                createReserva
            }}

        >
            {children}
        </TaskContext.Provider>
    )


}
