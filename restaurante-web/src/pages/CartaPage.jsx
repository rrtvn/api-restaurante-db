import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCargarPlato, startCargarPlatoByCat } from '../actions/platosActions';
import { CardFood } from '../components/CardFood/CardFood'
import { Box, Grid } from '@mui/material'
import { DataView } from 'primereact/dataview';

import { SliderCategoria } from '../components/SlideComponent/SliderCategoria';

import '../App.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




export const CartaPage = () => {



    const dispatch = useDispatch();
    const { platos } = useSelector(state => state.platos);
    const [cargarPlatos, setCargarPlatos] = useState(platos);

    const itemTemplate = (plato, layout) => {
        return (
            cardFood(plato)
        )
    }
    
    
    useEffect(() => {
        dispatch(startCargarPlato());
    }, []);
    
    const cargarPlatosByCat = (plato) => {
        setCargarPlatos(plato)
    }

    const cardFood = (plato) => {
        return (
            
                <div className="col-12 md-4 p-2">
                    <CardFood
                        
                        key={plato._id}
                        img={plato.img}
                        title={plato.nombre}
                        categorias={plato.categorias}
                        description={plato.descripcion}
                        precio={"$ " + plato.precio}

                    />
                </div>
        )
    }

    //TODO: ESTA FUNCIONANDO LA OPCION DE ONCLICK, RECIBE EL NOMBRE DE LA CATEGORIA
    //FALRATIA LA PARTE DE VER COMPATIBILIDAD EN LA PETICION DESDE LA PAGINA AL SERVER


    return (
        <div >
            <Box className='pt-52 mx-48 '>
                <SliderCategoria onClick={cargarPlatosByCat} ></SliderCategoria>
            </Box>
            <hr />
            <div className='data-platos  px-20 py-20 columns'>
                <DataView value={cargarPlatos} layout='grid' className='p-col-12' itemTemplate={itemTemplate} rows={6} />
            </div>
        </div>
    );
}


