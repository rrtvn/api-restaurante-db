import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startCargarPlato,
  startCargarPlatoByCat,
} from "../actions/platosActions";
import { Box, Container, Divider } from "@mui/material";

import { SliderCategoria } from "../components/SlideComponent/SliderCategoria";

import "../App.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {DataViewComponent} from "../components/DataView/DataViewComponent";

export const CartaPage = () => {
  const dispatch = useDispatch();
  const { platos } = useSelector((state) => state.platos);
  const { categorias } = useSelector((state) => state.categorias);
  const [categoria, setCategoria] = useState(categorias);
  const [cargarPlatos, setCargarPlatos] = useState(platos);

  

  const cargarPlatosByCat = (cat) => {
    dispatch(startCargarPlatoByCat(cat));
    setCargarPlatos();
  };

  //Utilizamos useEffect para cargar lo platos en
  useEffect(() => {
    setCargarPlatos(platos);
  }, [platos]);

  //TODO: ESTA FUNCIONANDO LA OPCION DE ONCLICK, RECIBE EL NOMBRE DE LA CATEGORIA
  //FALRATIA LA PARTE DE VER COMPATIBILIDAD EN LA PETICION DESDE LA PAGINA AL SERVER

  return (
    <Container
      id="container-food"
      disableGutters
      sx={{
        width: {
          // xl: "100%",
          // lg: "80%",
          // md: "70%",
          // sm: "50%",
          // xs: "40%",
        },
        marginY: 5,
        maxWidth: "xl",
        height: "100%",
        minWidth: "xs",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around", // Distribuye los objetos
        alignItems: "center",
      }}
      maxWidth={false}
      
    >
      <Box
        id="box-categorias"
        sx={{
          width: "100%",
          display: "block",
          alignItems: "center",
          justifyContent: "center",
          paddingX: 5,
          
        }}
      >
        <SliderCategoria categorias={categoria} onClick={cargarPlatosByCat}></SliderCategoria>
      </Box>
      <Divider />
      
      <DataViewComponent cargarPlatos={cargarPlatos}></DataViewComponent>
    </Container>
  );
};
