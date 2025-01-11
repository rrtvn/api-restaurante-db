import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startCargarPlato,
  startCargarPlatoByCat,
} from "../actions/platosActions";
import { CardFood } from "../components/CardFood/CardFood";
import { Box, Container, Divider } from "@mui/material";
import { DataView } from "primereact/dataview";

import { SliderCategoria } from "../components/SlideComponent/SliderCategoria";

import "../App.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { blue } from "@mui/material/colors";

export const CartaPage = () => {
  const dispatch = useDispatch();
  const { platos } = useSelector((state) => state.platos);
  const [cargarPlatos, setCargarPlatos] = useState(platos);

  const itemTemplate = (plato) => {
    return (
      <CardFood
        key={plato._id}
        img={plato.img}
        title={plato.nombre}
        categorias={plato.categorias}
        description={plato.descripcion}
        precio={"$ " + plato.precio}
      />
    );
  };

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
      disableGutters
      sx={{
        
        width: {
          xl: "100%",
          lg: "80%",
          md: "70%",
          sm: "50%",
          xs: "40%",
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
        className=" "
        sx={{
          width: "100%",
          display: "block",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SliderCategoria onClick={cargarPlatosByCat}></SliderCategoria>
      </Box>
      <Divider />
      <Box
        sx={{ width: "100%", backgroundColor: "grey", marginTop: 5 }}
        className="data-platos  px-10 py-10 columns"
      >
        <DataView
          value={cargarPlatos}
          
          layout="grid"
          className="justify-center"
          itemTemplate={itemTemplate}
        />
      </Box>
    </Container>
  );
};
