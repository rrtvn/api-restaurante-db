import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCargarPlato } from '../actions/platosActions';

import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { ImgIndex } from '../components/ImgIndex/ImgIndex';

import { Carousel } from 'primereact/carousel'
import { Grid, Typography, colors } from '@mui/material';
import { MapsComponent } from '../components/Maps/MapsComponent';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import  '../config.js'
import CardFoodIndx from '../components/CardFood/CardFoodIndx';
//import { API_KEY } from '../config.js';





export const IndexPage = () => {


  const [swiperRef, setSwiperRef] = useState(null);
  const dispatch = useDispatch();
  const { platos } = useSelector(state => state.platos);

  const [slides, setSlides] = useState(
    platos.map((plato) =>  <CardFoodIndx
    key={plato._id}
    img={plato.img}
    title={plato.nombre}
    categorias={plato.categorias}
    description={plato.descripcion}

  ></CardFoodIndx>)
);

  useEffect(() => {
    dispatch(startCargarPlato());
  }, [dispatch, startCargarPlato].slice(0,9));


  // const cardFood = (plato) => {
  //   return (
  //     <CardFood
  //       img={plato.img}
  //       title={plato.nombre}
  //       categorias={plato.categorias}
  //       description={plato.descripcion}
  //       precio={"$ " + plato.precio}

  //     ></CardFood>
  //   )
  // }

  return (
    <div >
      
      <ImgIndex></ImgIndex>
      {/* {carouselFood} */}


      <hr></hr>
      {/* CARRUSEL PLATOS */}
      <section className='my-8 mx-5'>
        <Box className="box-map">
          {/* <Carousel value={platos} numVisible={3} 
            numScroll={3} itemTemplate={cardFood}
            circular
          ></Carousel> */}
          <Swiper
            className='relative'
            modules={[EffectFade, Navigation, Pagination]}
            onSwiper={setSwiperRef}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            
          >
            {slides.map((slidePlato, index) => (
              <SwiperSlide key={slidePlato} virtualIndex={index} >
                {slidePlato}
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </section>
      <hr></hr>

      {/* MAP */}
      <section className=' relative h-auto'>
        <Grid container   className=' px-40 py-10' >

          <Grid className='  px-20' xs md={4} item >
            <MapsComponent  className="relative "/>
          </Grid >
          <Divider   orientation='vertical' />
          <Grid className='px-20 border ' xs md item >

          <h1 className='text-center my-10 text-5xl'>Como puedes llegas a nuestro resturante?</h1>
          <hr />
            <p  className='text-emerald-950 py-20 text-2xl'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, commodi pariatur. 
              Quaerat aspernatur incidunt explicabo nemo itaque maxime aliquam, 
              deserunt et adipisci nostrum saepe vel aut rerum, officia error commodi?
            </p>
            
          </Grid>

        </Grid>
      </section>
    </div>


  )
}


