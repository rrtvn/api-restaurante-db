import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCargarPlato } from '../actions/platosActions';
import { CardFood } from '../components/CardFood/CardFood'
import { Box, Container } from '@mui/material'




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

        ></CardFood>
    ));


    return (
        <Container>

            <Box>
                <div className="row flex">
                    {cardFood}
                </div>
            </Box>
        </Container>
    );
}


