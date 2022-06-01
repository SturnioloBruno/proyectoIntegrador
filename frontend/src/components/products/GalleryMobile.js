import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "../../styles/products/GalleryMobile.css";

function GalleryMobile() {
    return (
        <Swiper
            pagination={{
                type: "fraction",
            }}
            navigation={true}
            modules={[Pagination]}
            className="mySwiper"
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            {/*<SwiperSlide><img src={`${src}`} alt={`${alt}`} /></SwiperSlide>*/}
            <SwiperSlide><img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Hotel" /></SwiperSlide>
            <SwiperSlide><img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="Hotel" /></SwiperSlide>
            <SwiperSlide><img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Hotel" /></SwiperSlide>
            <SwiperSlide><img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="Hotel" /></SwiperSlide>
        </Swiper>
    )
}

export default GalleryMobile;