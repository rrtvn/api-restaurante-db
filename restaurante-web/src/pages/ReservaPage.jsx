//import React from 'react';
import { Container, Box } from '@mui/material';
import { FormReserva } from '../components/Form/FormReserva';
import Grid from '@mui/material/Grid';

export const ReservaPage = () => {


   return (

      

         <Container className='h-screen'>
            <Box className="w-full mb-10">
               <Grid container  className=''>
                  <Grid xs={2} md={5}>
                     <FormReserva />
                  </Grid>
                  <Grid className='grid-reserva ' xs={2} md={7}>
                  </Grid>
               </Grid>
            </Box>
         </Container>
      



   );



}


