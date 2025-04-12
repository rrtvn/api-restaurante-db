import "./Footer.css";
import { Footer } from "flowbite-react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

export const FooterContent = () => {
  return (
    // <Footer id="footer">

    // </Footer>
    <footer
      style={{ height: "100%" }}
      className=" md:items-center md:justify-between"
    >
      <Grid className="flex static" sx={{paddingX: "80px"}} spacing={3}>
        <Grid id="img-grid" item xs>
          <a href="https://nvrrt.cl/" className="">
            <img
              id="img-footer"
              src="src/assets/Logos/logo4.png"
              className=""
              alt="Restaurante Logo"
            />
          </a>
        </Grid>
        <Grid id="horario-grid" className="py-5" item xs>
          <h4 className="mb-6 text-sm font-bold text-center text-white uppercase dark:text-white">
            Horarios
          </h4>
          <ul className="text-gray-500 text-center dark:text-gray-400 ">
            <li className="mb-4">
              <h5 className="text-white font-semibold">
                Miercoles, Jueves y Domingos
              </h5>
              <h5 className="text-white ">13:00 - 18:00 hrs</h5>
            </li>
            <li className="mb-4">
              <h5 className="text-white font-semibold">Viernes y Sabados</h5>
              <h3 className="text-white ">
                13:00 - 23:00 hrs (Musica en Vivo)
              </h3>
            </li>
          </ul>
        </Grid>

        <Grid id="otro-grid" className="py-5" item xs>
          <h4 className="mb-3 text-sm  text-center font-bold text-white uppercase dark:text-white">
            Menu
          </h4>
          <NavLink to={"carta"}>
            <Typography sx={{ padding: "8px", color: "#f4f5f0" }}>
              Carta
            </Typography>
          </NavLink>
          <NavLink to={"reserva"}>
            <Typography sx={{ padding: "8px", color: "#f4f5f0" }}>
              Reserva
            </Typography>
          </NavLink>
          <NavLink to={"comoLlegar"}>
            <Typography sx={{ padding: "8px", color: "#f4f5f0" }}>
              ¿Como Llegar?
            </Typography>
          </NavLink>
        </Grid>
        {/* <Grid id="otro-grid" alignItems={"center"} justifyItems={"center"} className="py-5" item xs>
          <h4 className="mb-6 text-sm  text-center font-bold text-white uppercase dark:text-white">
            Siguenos
          </h4>
          <NavLink id="navlink-fb">
            <BsFacebook className="text-2xl m-5 text-white" />
          </NavLink>
          <NavLink>
            <BsInstagram className="text-2xl m-5 text-white" />
          </NavLink>
        </Grid> */}
      </Grid>

      {/* <Divider component="div" id="divider" sx={{}} /> */}

      {/* <Grid
        container
        gridRow={3}
        sx={{ flexBasis: "60%", flexGrow: 0, paddingY: 1, paddingX: 10 }}
        className=""
      >
        <Grid item sx={{ flexBasis: "80%", width: "100%" }}>
          <span className="text-sm mr-80 sm:text-center text-gray-400">
            © 2023 Nvrrt™ All Rights Reserved.
          </span>
        </Grid>
            
        <Grid container gridRow={2} item sx={{ flexBasis: "20%", width: "100%"
          , alignContent: "center", justifyContent: "center" }}>
          <Grid>
            <NavLink id="navlink-fb">
              <BsFacebook className="text-xl mx-1 text-white" />
            </NavLink>
          </Grid>
          <Grid>
            <NavLink>
              <BsInstagram className="text-xl mx-1 text-white" />
            </NavLink>
          </Grid>
        </Grid>
      </Grid> */}
    </footer>
  );
};
