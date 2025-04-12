import { types } from './types.js'
import authService from '../services/authService.js'

export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user,
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
        const user = await authService.signin(email, password);
        dispatch(loginSuccess(user));
    } catch (error) {
       dispatch(loginFailure(error))
    }
}
export const logoutUser = () => async (dispatch) =>{
    //SE ELIMINA LA COOKIECON EL TOKEN
    // Cookies.remove('token')
    authService.logout();
    //SE ENVIA LA ACCION DE EXITO AL STORE
    dispatch(logoutSuccess());
}