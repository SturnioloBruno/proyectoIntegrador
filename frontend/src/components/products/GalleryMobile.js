import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "../../styles/products/GalleryMobile.css";

function GalleryMobile({srcImg, altImg}) {
    return (
        <Swiper
            pagination={{
                type: "fraction",
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            slidesPerView={1}
        >
            {srcImg?.map((image) => (
                <SwiperSlide key={image.id}><img src={image.nombre_url} alt={altImg} /></SwiperSlide>
            ))}
        </Swiper>
    )
}

export default GalleryMobile;