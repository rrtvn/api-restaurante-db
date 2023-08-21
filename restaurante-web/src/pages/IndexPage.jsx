import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCargarPlato } from '../actions/platosActions';
import { CardFood } from '../components/CardFood/CardFood';

import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { ImgIndex } from '../components/ImgIndex/ImgIndex';

import { Carousel } from 'primereact/carousel'
import { Grid, Typography } from '@mui/material';
import { MapsComponent } from '../components/Maps/MapsComponent';

import  '../config.js'
import { API_KEY } from '../config.js';





export const IndexPage = () => {



  const dispatch = useDispatch();
  const { platos } = useSelector(state => state.platos);

  useEffect(() => {
    dispatch(startCargarPlato());
  }, [dispatch, startCargarPlato]);


  const cardFood = (plato) => {
    return (
      <CardFood
        img={plato.img}
        title={plato.name}
        description={plato.descripcion}
        precio={plato.precio}

      ></CardFood>
    )
  }

  return (
    <div >
      <ImgIndex></ImgIndex>
      {/* {carouselFood} */}

      <section className='my-8 mx-5'>
        <Box >
          <Carousel value={platos} numVisible={3} numScroll={3} itemTemplate={cardFood}></Carousel>
        </Box>
      </section>
      <section className=' bg-slate-800  relative h-auto'>
        <Grid className='block  ' container>

          <Grid className='py-10 px-28 '  item xs={6} md={6}>
            <MapsComponent className=" items-center"/>
          </Grid >
          <Divider component="Grid"  orientation="vertical" flexItem></Divider>
          <Grid className='py-10 px-5'  item xs={6} md={5}>

            <Typography>¿Como Llegar?</Typography>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, commodi pariatur. 
              Quaerat aspernatur incidunt explicabo nemo itaque maxime aliquam, 
              deserunt et adipisci nostrum saepe vel aut rerum, officia error commodi?</p>
          </Grid>

        </Grid>
      </section>
    </div>


  )
}


