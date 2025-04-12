import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCargarPlato } from "../actions/platosActions";

import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { ImgIndex } from "../components/ImgIndex/ImgIndex";
import { Grid, Typography, colors } from "@mui/material";
import { MapsComponent } from "../components/Maps/MapsComponent";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../config.js";
import CardFoodIndx from "../components/CardFood/CardFoodIndx";
//import { API_KEY } from '../config.js';

export const IndexPage = () => {
  const dispatch = useDispatch();
  const { platos } = useSelector((state) => state.platos);
  const [swiperRef, setSwiperRef] = useState(null);

  const [slides, setSlides] = useState(
    platos.map((plato) => (
      <CardFoodIndx
        key={plato._id}
        img={plato.img}
        title={plato.nombre}
        clasificacion={plato.clasificacion}
        categorias={plato.categorias}
        description={plato.descripcion}
        precio={plato.precio}
      ></CardFoodIndx>
    ))
  );

  useEffect(() => {
    dispatch(startCargarPlato());
  }, []);

  return (
    <div>
      <ImgIndex></ImgIndex>
      {/* {carouselFood} */}

      <hr></hr>
      {/* CARRUSEL PLATOS */}
      <section className="my-8 mx-5">
        {/* <Box className="box-map">
         
          
        </Box> */}
        <Swiper
          className=""
          modules={[EffectFade, Navigation, Pagination]}
          onSwiper={swiperRef}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={0}
          effect={"fade"}
          // navigation={true}
          id="swiper-index"
        >
          {slides.map((slidePlato, index) => (
            <SwiperSlide
              id="swiper-slide"
              className=""
              key={index}
              virtualIndex={index}
            >
              {slidePlato}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* <hr></hr> */}

      {/* MAP */}
      <section className="  ">
        <Grid
          container
          xs={12}
          spacing={1}
          sx={{
            backgroundColor: "#EFE3C2",
            height: "320px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
          className="px-10  py-1"
        >
          {/* <Divider   orientation='vertical' /> */}
          <Grid className="  " xs={12} md={6} sx={{ flex: 1 }} item>
            <Typography
              variant="h5"
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              textAlign={"center"}
            >
              ¿Como puedes llegas a nuestro resturante?
            </Typography>
          </Grid>
          <Grid
            className=""
            xs={12}
            md={6}
            sx={{ padding: "1px", flex: 1, width: "100%" }}
            item
          >
            <MapsComponent
              className=" "
              sx={{  }}
            />
          </Grid>
        </Grid>
      </section>
    </div>
  );
};
