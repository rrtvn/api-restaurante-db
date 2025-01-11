import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCargarCategoria } from "../../actions/categoriasActions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { CardCategorias } from "../CardFood/CardCategorias";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { render } from "react-dom";

export const SliderCategoria = ({ onClick }) => {
  const dispatch = useDispatch();
  const { categorias } = useSelector((state) => state.categorias);

  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    dispatch(startCargarCategoria());
  }, []);

  const handleCatClick = (cat) => {
    if(onClick(cat)=='all'){
      render()
    }
    onClick(cat);
  };

  const [slides, setSlides] = useState(
    categorias.map((cat) => (
      <CardCategorias
        key={cat.id}
        onClick={() => handleCatClick(`${cat.name}`)}
        name={cat.name}
      ></CardCategorias>
    ))
  );

  return (
    <Swiper
      id='swiperSlide-cat'
      xs={{ 
        
      }}
      modules={[Virtual, Navigation, Pagination]}
      onSwiper={setSwiperRef}
      centeredSlides={false}
      spaceBetween={1}
      slidesPerView={4}
      pagination={{
        type: "bullets",
        clickable: true,
      }}
      navigation={false}
      virtual
    >
      {slides.map((cardCate, index) => (
        <SwiperSlide key={index}  style={{width: "100%"}} virtualIndex={index}>
          {cardCate}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
