
import { useDispatch } from 'react-redux';
import { startGuardarReserva } from '../actions/reservaActions';
import { FormReserva } from '../components/Form/FormReserva';
import {  Box } from '@mui/material';
import Grid from '@mui/material/Grid';

export const ReservaPage = () => {
  

   const dispatch = useDispatch();

   const addReserva = async(reserva) => {
      let res = await dispatch(startGuardarReserva(reserva))
      if(res != null){
         console.log(res)
      }
   }

   return (

      

         <div className=''>
            
            <Box  className="w-full mb-20 py-20 px-60">
               <Grid container  className=''>
                  <Grid xs={2} md={5}>
                     <FormReserva onAgregar={addReserva} />
                  </Grid>
                  <Grid className='grid-reserva ' xs={2} md={7}>
                  </Grid>
               </Grid>
            </Box>
         </div>
      



   );



}


