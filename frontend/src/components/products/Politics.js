function Politis({info}) {
    return (
        <section className="section__politics section__title-border">
            <h2>Qué tenés que saber</h2>
            <ul>
                {info?.map((policy) => (
                    <li>
                        <h3>{policy.policy.title}</h3>
                        <ul>
                            <li>{policy.policy.desc}</li>
                        </ul>
                    </li>
                ))}
                <li>
                    <h3>Salud y seguridad</h3>
                    {info?.map((policy) => (
                        <li>
                            <h3>{policy.policy.title}</h3>
                            <ul>
                                <li>{policy.policy.desc}</li>
                            </ul>
                        </li>
                    ))}
                </li>
                <li>
                    <h3>Política de cancelación</h3>
                    <p>Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.</p>
                </li>
            </ul>
        </section>
    )
}

export default Politis;