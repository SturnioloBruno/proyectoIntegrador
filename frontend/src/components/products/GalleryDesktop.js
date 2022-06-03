import React, { useState } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css';
import "../../styles/products/GalleryDesktop.css";

function GalleryDesktop({srcImg, altImg}) {
    let photos = [];
    {srcImg?.map((image) => (
        photos.push(image.nombre_url)
    ))}
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='div__gallery-desktop'>
            <ul className='ul__gallery-desktop'>
                {srcImg?.map((image) => (
                   <li key={image.id}><img src={image.nombre_url} alt={altImg} /></li>
                ))}
            </ul>
            <>
            <a href='#'className="button__open-gallery" onClick={() => setIsOpen(true)}>Ver más</a>
            <ReactBnbGallery
            show={isOpen}
            photos={photos}
            onClose={() => setIsOpen(false)}
            />
            </>
        </div>
    )
}

export default GalleryDesktop;