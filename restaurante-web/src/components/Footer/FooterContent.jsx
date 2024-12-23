

import "./Footer.css"
import { Footer } from 'flowbite-react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Divider } from "@mui/material";


export const FooterContent = () => {
  return (


    <footer className="max-w-full ">
      <div className="mx-6 min-w-max max-w-full p-4 py-6 lg:py-8">
        <Grid className="flex static" spacing={3}>
          <Grid item xs>
            <a href="https://nvrrt.cl/" className="">
              <img
                id="img-footer"
                src="src/assets/Logos/logo4.png"
                className="mr-28   ml-28"
                alt="Restaurante Logo"
              />
            </a>
          </Grid>
          <Grid className="py-5" item xs >


            <h1 className="mb-6 text-sm font-semibold text-center text-white uppercase dark:text-white">
              Horarios
            </h1>
            <ul className="text-gray-500 text-center dark:text-gray-400 ">
              <li className="mb-4">
                <h2 className="text-white font-bold">Miercoles, Jueves y Domingos</h2>
                <h5 className="text-white ">13:00 - 18:00 hrs</h5>
              </li>
              <li className="mb-4">
                <h2 className="text-white font-bold">Viernes y Sabados</h2>
                <h3 className="text-white ">13:00 - 23:00 hrs (Musica en Vivo)</h3>
              </li>
            </ul>
          </Grid>
          <Grid className="py-5" item xs>
            <h1 className="mb-6 text-sm  text-center font-bold text-white uppercase dark:text-white">
              Ven a conocernos
            </h1>
            <ul className="font-medium text-center ">
              <li className="mb-4">
                <a href="#" className="hover:underline ">
                  Carta
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Reserva
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  ¿Como Llegar?
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>

        <Divider component="div" id="divider" className=" my-10" />
        
        <Grid container className="">
          <Grid className="mx-40" item xs>

            <Box className="mx-28">
              <span className="text-sm mr-80 sm:text-center text-gray-400">© 2023 Nvrrt™ All Rights Reserved.</span>
            </Box>
          </Grid>
          <Grid item xs={2}  >
            <Box className="flex xs pr-40  space-x-5" >
              <Footer.Icon href="https://www.facebook.com/trattoriapavarotti" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
            </Box>
          </Grid>
        </Grid>
      </div>
    </footer>




  )
}


