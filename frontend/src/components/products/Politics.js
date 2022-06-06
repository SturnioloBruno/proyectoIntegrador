function Politis({policy}) {
    return (
        <section className="section__politics section__title-border">
            <h2>Qué tenés que saber</h2>
            <ul>
                {policy?.map((policy) => (
                    <li>
                        <h3>{policy.policy.title}</h3>
                        <ul>
                            <li>{policy.policy.desc}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Politis;