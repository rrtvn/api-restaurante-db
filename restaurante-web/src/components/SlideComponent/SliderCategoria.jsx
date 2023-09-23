
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCargarCategoria } from '../../actions/categoriasActions';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { CardCategorias } from '../CardFood/CardCategorias';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const SliderCategoria = ({onClick}) => {

    const dispatch = useDispatch();
    const { categorias } = useSelector(state => state.categorias);

    const [swiperRef, setSwiperRef] = useState(null);

    
    

    
    useEffect(() => {
        dispatch(startCargarCategoria())
    }, []);


    const handleCatClick = (cat) => {
        onClick(cat);
        
    }

    

    const [slides, setSlides] = useState(
        categorias.map(
                (cat) => <CardCategorias
                key={cat.id}
                onClick={() => handleCatClick(`${cat.name}`)}
                name={cat.name}
            ></CardCategorias>
        )
    );
 
    return (
        <Swiper
                    
                    modules={[Virtual, Navigation, Pagination]}
                    onSwiper={setSwiperRef}
                    centeredSlides={false}
                    
                    spaceBetween={1}
                    slidesPerView={4}
                    pagination={{
                        type: 'bullets',
                        clickable: true
                    }}
                    navigation={true}
                    
                    virtual>
                    {
                    
                    
                    slides.map((cardCate, index) => (
                        
                        <SwiperSlide  key={index} virtualIndex={index}>
                            {cardCate}
                            
                        </SwiperSlide>
                    ))
                    
                    
                    }
                </Swiper>
    )
}


