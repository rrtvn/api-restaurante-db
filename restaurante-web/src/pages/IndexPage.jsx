import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCargarPlato } from '../actions/platosActions';

import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { ImgIndex } from '../components/ImgIndex/ImgIndex';
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


  const dispatch = useDispatch();
  const { platos } = useSelector(state => state.platos);
  const [swiperRef, setSwiperRef] = useState(null);
  
  const [slides, setSlides] = useState(
    platos.map((plato) =>  <CardFoodIndx
    key={plato._id}
    img={plato.img}
    title={plato.nombre}
    categorias={plato.categorias}
    description={plato.descripcion}
    precio={plato.precio}

  ></CardFoodIndx>)
);

  useEffect(() => {
    dispatch(startCargarPlato());
  }, []);



  return (
    <div >
      
      <ImgIndex></ImgIndex>
      {/* {carouselFood} */}


      <hr></hr>
      {/* CARRUSEL PLATOS */}
      <section className='my-8 mx-5'>
        {/* <Box className="box-map">
         
          
        </Box> */}
        <Swiper
            className=''
            modules={[EffectFade, Navigation, Pagination]}
            onSwiper={swiperRef}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={0}
            effect={'fade'}
            // navigation={true}
            id='swiper-index'
          >
            {slides.map((slidePlato, index) => (
              <SwiperSlide    id='swiper-slide'     className=''    key={index} virtualIndex={index} >
                {slidePlato}
              </SwiperSlide>
            ))}
          </Swiper>
      </section>
      {/* <hr></hr> */}

      {/* MAP */}
      <section className=' h-auto '>
        <Grid container spacing={1}  className='lg:block px-40  py-10' >

          <Grid className=' lg:block mr-11  ' xs item >
            {/* <MapsComponent  className="md:w-1/4  "/> */}
          </Grid >
          <Divider   orientation='vertical' />
          <Grid className=' lg:block border ' xs  item >

          <h1 className='text-center my-10 text-3xl'>¿Como puedes llegas a nuestro resturante?</h1>
          <hr />
            <p  className='text-emerald-950 py-20 text-lg'>
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


