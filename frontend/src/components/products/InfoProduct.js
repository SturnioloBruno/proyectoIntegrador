import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';

function InfoProduct({address, meters, score, stars, puntuation}) {
    return (
        <section className='section__address-score'>
            <div className='div__info-address'>
                <p className="p__city-info">Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina</p>
                <p className="p__center-meters">A 940 m del centro</p>
                {/*<p>${address}</p>
                <p>A ${meters}m del centro</p>*/}
            </div>
            <div className='div__puntuation-score'>
                <div className="div__info-score">
                    <p>Muy bueno</p>
                    <Stack spacing={1}>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} emptyIcon={<StarIcon style={{ opacity: 0.5 }} />} readOnly />
                    </Stack>
                    {/*<p>${score}</p>*/}
                </div>
                <span>8</span>
                {/*<span>${puntuation}</span>*/}
            </div>
        </section>
    )
}

export default InfoProduct;