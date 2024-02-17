
import usersService from "../services/usersService";
import { types } from "./types";




const iniciarSesion = (user) => ({
    type: types.iniciarSesion,
    payload: user
})


export const startIniciarSesion = (email, password) => async (dispatch) =>{

    try {
        const user = usersService.signIn(email, password);
        console.log(user)
        dispatch(iniciarSesion);
    } catch (error) {
        console.log(error)
        // dispatch({
        //     type: 'LOGIN_FAIL',
        //     payload: error.response.data.msg,
        // })
    }
}