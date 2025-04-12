import { Navigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import { FormLogin } from "../components/Form/FormLogin";

export const LoginPage = () => {
  

  return (
    <Box className=" w-full">
      <Grid container className="px-20 py-14" spacing={0}>
        <Grid item className="bg-white px-28 py-5 " sx={{borderRadius: 5}} xs={12} md={6}>
          <Typography className="py-10" variant="h4">WELCOME... </Typography>
          <FormLogin />
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="mx-10 align-middle py-5">
            {/* <Typography variant="h5">INICIE SESION CON SU USUARIO</Typography> */}
          </div>
        </Grid>
      </Grid>
    </Box>
    // <section className=''>

    // </section>
  );
};
