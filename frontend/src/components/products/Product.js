import { Link } from "react-router-dom";
import HeaderProduct from './HeaderProduct';
import InfoProduct from './InfoProduct';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import "../../styles/Product.css";
import 'swiper/css';
import "swiper/css/pagination";

function Product({src, alt, title, text}) {
    return (
        <section className="section__info-product">
            <HeaderProduct />
            <InfoProduct />
            <div className="div__img-actions">
                <div className="div__buttons-bar">
                    <Link to="#" class="a__share-icon">Compartir</Link>
                    <Link to="#" class="a__like-icon">Me gusta</Link>
                </div>
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
            </div>
            <h2>Alójate en el corazón de Buenos Aires</h2>
            <p>Está situado a solo unas calles de la avenida Alvear, de la avenida Quintana, del parque San Martín y del distrito de Recoleta. En las inmediaciones también hay varios lugares de interés, como la calle Florida, el centro comercial Galerías Pacífico, la zona de Puerto Madero, la plaza de Mayo y el palacio Municipal.<br />
            Nuestros clientes dicen que esta parte de Buenos Aires es su favorita, según los comentarios independientes.<br />
            El Hotel es un hotel sofisticado de 4 estrellas que goza de una ubicación tranquila, a poca distancia de prestigiosas galerías de arte, teatros, museos y zonas comerciales. Además, hay WiFi gratuita.<br />
            El establecimiento sirve un desayuno variado de 07:00 a 10:30.</p>
            {/*<h2>${title}</h2>
            <p>${text}</p>*/}
        </section>
    )
}

export default Product;