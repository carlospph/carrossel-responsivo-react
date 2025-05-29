// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Gallery.css';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className='container__swiper'
    >
      {Array(4).fill().map((_, index) => (
        <SwiperSlide key={index}>
          <div className="container d-flex flex-column justify-content-center align-items-center h-100 d-md-flex flex-md-row">
            <div className="col text-center text-md-start">
              <span className="title__mini font-12">Melhores ofertas personalizadas</span>
              <h4 className="title__main font-64">Queima de estoque Nike 🔥</h4>
              <p className="text__slide">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
              <button className='btn btn-danger'>Ver oferta</button>
            </div>
            <div className="col">
              <img src="https://github.com/carlospph/projeto-tech/blob/main/assets/tenis2-galeria-Photoroom.png?raw=true" alt="Slide um - tênis preto nike" className="img-fluid" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
