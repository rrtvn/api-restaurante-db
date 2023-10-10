
import usersService from "../services/usersService";
import { types } from "./types";




const iniciarSesion = (user) => ({
    type: types.iniciarSesion,
    payload: user
})


export const startIniciarSesion = (signIn) => async (dispatch) =>{

    try {
        const user = await usersService.signIn(signIn);
        console.log(user)
        if (user) {
           dispatch(iniciarSesion(user));
        }
        return true;
    } catch (error) {
        return false
    }
}