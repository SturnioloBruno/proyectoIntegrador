function InfoProduct({address, meters, score, stars, puntuation}) {
    return (
        <div className='div__address-score'>
            <div className='div__info-address'>
                <p>Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina</p>
                <p className="p__center-meters">A 940 m del centro</p>
                {/*<p>${address}</p>
                <p>A ${meters}m del centro</p>*/}
            </div>
            <div className='div__puntuation-score'>
                <div className="div__info-score">
                    <p>Muy bueno</p>
                    {/*<p>${score}</p>*/}
                    {/*Mostrar estrellas*/}
                </div>
                <span>8</span>
                {/*<span>${puntuation}</span>*/}
            </div>
        </div>
    )
}

export default InfoProduct;