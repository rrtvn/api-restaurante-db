import { Navigate } from "react-router-dom";
import { startIniciarSesion } from '../actions/usersActions';
import { Divider } from 'primereact/divider';
import { Box, Typography } from '@mui/material';
import {FormLogin} from '../components/Form/FormLogin';
import { useDispatch } from 'react-redux';
import { useAuth } from '../context/authContext';
import { useState } from "react";

export const LoginPage = () => {

  const { authState, dispatch} = useAuth();
  const dispatchRedux = useDispatch()

  const [user, setUser] = useState("")
  


  const handleLogin = (signIn) => {

    dispatch({type: 'LOGIN_SUCCESS', payload: signIn})

    
    const user = dispatchRedux(startIniciarSesion(signIn));
    return setUser(user)
  }

  

  return (
    <section className='h-screen py-10'>
      <Box className='mx-20 py-20 inline-block'>
        <div className="card  flex bg-white  py-20 my-40 mx-48">
          {user && (<Navigate to='/addPlato'></Navigate>)}
          
            <FormLogin onAgregar={handleLogin}/>
          <Divider layout='vertical' ></Divider>
          <div className="  ">

            
            <div className="mx-10 align-middle py-5">

              <Typography variant='h3'>BIENVENIDO AL RESTAURANTE</Typography>
              <Typography variant='h5'>INICIE SESION CON SU USUARIO</Typography>
            </div>


          </div>


        </div>
      </Box>
    </section>
  )
}
