import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCargarPlato } from '../actions/platosActions';
import { CardFood } from '../components/CardFood/CardFood'
import { Box, Container } from '@mui/material'
import { Carousel } from 'primereact/carousel'




export const CartaPage = () =>  {

    const dispatch = useDispatch();
    const {platos} = useSelector(state => state.platos);

    useEffect(() => {
        dispatch(startCargarPlato());
    }, [dispatch,startCargarPlato]);
    
    
    

    const cardFood = platos.map((plato) => (
        <CardFood
            img={plato.img}
            title={plato.nombre}
            description={plato.descripcion}
            precio={plato.precio}

        ></CardFood>
    ));

    // const cardCateg = categorias.map((categorias) => (

    //     <div className="card"></div>
    // ));




    return (
        <Container className='h-screen'>
            <Box>
                <section className='my-10 h-80'>
                    <Box>
                        <Carousel value={''} numVisible={3} numScroll={3} itemTemplate={''}></Carousel>
                    </Box>
                </section>
                <hr className='my-5'/>
                <div className="row flex ">
                    {cardFood}
                </div>
            </Box>
        </Container>
    );
}


