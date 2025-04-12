import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCargarCategoria } from "../../actions/categoriasActions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CardActionArea, Typography } from "@mui/material";

export const SliderCategoria = ({ onClick, categorias }) => {
  const dispatch = useDispatch();
 
  
  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    dispatch(startCargarCategoria());
  }, []);

  const handleCatClick = (cat) => {
    if (onClick(cat) == "all") {
      render();
    }
    onClick(cat);
  };
  
// ORDENA EL ARRAY DE CATEGORIAS ALFABETICAMENTE
  const  sortedCate =   categorias.sort((a,b) => a.name.localeCompare(b.name)); 

  
  const [slides, setSlides] = useState(
    
    sortedCate.map((cat) => (
      <CardActionArea
        className=""
        key={cat.id}
        onClick={() => handleCatClick(`${cat.name}`)}
        name={cat.name}
      >
        <Typography
          className="typo-card "
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: "inherit",
            height: "inherit",
            backgroundColor: "#316049",
            color: "#f4f5f0",
            borderRadius: 3
          }}
        >
          {cat.name}
        </Typography>
      </CardActionArea>
    ))
  );

  return (
    <Swiper
      id="swiperSlide-cat"
      modules={[Virtual, Navigation, Pagination]}
      slidesPerView={4}
      spaceBetween={10}
      navigation={false}
      virtual
      className=""
    >
      {slides.map((cardCate, index) => (
        <SwiperSlide
          key={index}
          id="swip"
          onClick={onclick}
          isVisible
          style={{ width: "100%" }}
          virtualIndex={index}
          className=""
        >
          {cardCate}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
