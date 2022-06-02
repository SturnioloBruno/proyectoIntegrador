function MapLocation({city}) {
    return (
        <section className="section__map-location section__title-border">
            <h2>¿Dónde vas a estar?</h2>
            <p className="p__bold-style">{city}</p>
            {/* Mapa */}
        </section>
    )
}

export default MapLocation;