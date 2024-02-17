import axios from 'axios'
import usersService from '../services/usersService.js'
import { types } from './types.js'
import Cookies from 'js-cookie'
import { API_URL } from '../config.js'

export const loginSuccess = (token) => ({
    type: types.LOGIN_SUCCESS,
    payload: token,
})
export const loginFailure = (error) => ({
    type: types.LOGIN_FAILURE,
    payload: error,
})
export const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
})


export const loginUser = (credentials) => async (dispatch) =>{
    try {

        const {email, password} = credentials

        axios.post(`${API_URL}/auth/signin`, {email, password})
        .then((resp) => {
            //SE GUARDA EL TOKEN EN UNA COOKIE
            console.log(resp);
            
            // const user = usersService.signIn(resp.data.token);
            // console.log(user)
            //SE ENVIA ACCION DE EXITO AL STORE
            Cookies.set('token', resp.data.token);
        })
        .catch((error) => {
            //SE ENVIA ACCION DE FALLA AL STORE 
            dispatch(loginFailure(error));
        });
    } catch (error) {
       console.log(error) 
    }
}
export const logoutUser = () => async (dispatch) =>{
    //SE ELIMINA LA COOKIECON EL TOKEN
    Cookies.remove('token')
    //SE ENVIA LA ACCION DE EXITO AL STORE
    dispatch(logoutSuccess());
}