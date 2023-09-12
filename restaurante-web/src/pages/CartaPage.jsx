import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCargarPlato } from '../actions/platosActions';
import { CardFood } from '../components/CardFood/CardFood'
import { Box, Container, Grid, Typography } from '@mui/material'
import { Carousel } from 'primereact/carousel'
import { startCargarCategoria } from '../actions/categoriasActions';
import { CardCategorias } from '../components/CardFood/CardCategorias';
import { Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




export const CartaPage = () => {


    const dispatch = useDispatch();
    const { platos } = useSelector(state => state.platos);
    const { categorias } = useSelector(state => state.categorias);

    const [swiperRef, setSwiperRef] = useState(null);

    const [slides, setSlides] = useState(
        categorias.map((cat) =>  <CardCategorias key={cat.id}  name={cat.name}></CardCategorias>)
    );

    
    console.log(categorias)

    useEffect(() => {
        dispatch(startCargarPlato());
        dispatch(startCargarCategoria());
    }, [dispatch, startCargarCategoria]);

    




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




    return (
        <div className='h-screen '>
            <Box className='pt-52 mx-48 '>
                {/*  */}
                <Swiper
                    modules={[Virtual, Navigation, Pagination]}
                    onSwiper={setSwiperRef}
                    centeredSlides={false}
                    circular
                    spaceBetween={1}
                    slidesPerView={4}
                    pagination={{
                        type: 'bullets',
                    }}
                    navigation={true}
                    virtual>
                    {slides.map((cardCate, index) => (
                        <SwiperSlide key={cardCate} virtualIndex={index}>
                            {cardCate}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
            <hr />
            <div className='flex my-10 mx-28'>

                {cardFood}
            </div>
        </div>
    );
}


