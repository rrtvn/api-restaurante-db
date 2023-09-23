import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCargarPlato, startCargarPlatoByCat } from '../actions/platosActions';
import { CardFood } from '../components/CardFood/CardFood'
import { Box, Grid } from '@mui/material'

import {SliderCategoria} from '../components/SlideComponent/SliderCategoria';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




export const CartaPage = () => {

    // const itemTemplate = (plato, layout) => {
    //     return(
    //         renderGridItem(plato)
    //     );
    // }

    const dispatch = useDispatch();
    const { platos } = useSelector(state => state.platos);
    

    
    const cargarPlatosByCat = (platos) => {
        console.log(platos)
         dispatch(startCargarPlatoByCat(platos))
    }

    

    useEffect(() => {
        dispatch(startCargarPlato());
    }, []);

    // const renderGridItem = (plato)=> {
    //     return <CardFood
    //     key={plato._id}
    //     img={plato.img}
    //     title={plato.nombre}
    //     categorias={plato.categorias}
    //     description={plato.descripcion}
    //     precio={"$ " + plato.precio}

    // ></CardFood>
    // }

    const cardFood = platos.map((plato) => (
        <CardFood
            key={plato._id}
            img={plato.img}
            title={plato.nombre}
            categorias={plato.categorias}
            description={plato.descripcion}
            precio={"$ " + plato.precio}

        ></CardFood>
    ));

    //TODO: ESTA FUNCIONANDO LA OPCION DE ONCLICK, RECIBE EL NOMBRE DE LA CATEGORIA
    //FALRATIA LA PARTE DE VER COMPATIBILIDAD EN LA PETICION DESDE LA PAGINA AL SERVER

    return (
        <div className='h-screen '>
            <Box className='pt-52 mx-48 '>
                <SliderCategoria onClick={cargarPlatosByCat} ></SliderCategoria>
            </Box>
            <hr />
            <div className='flex my-10 mx-28'>
{/* 
                <Grid className='flex' value={platos} layout='grid' itemTemplate={itemTemplate}>

                </Grid > */}
                {cardFood}
            </div>
        </div>
    );
}


