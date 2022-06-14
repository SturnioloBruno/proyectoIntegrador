import "../../styles/Products/Politics.css";

function Politics({policy}) {
    const listPolicy = policy?.map((policy) => (
        JSON.parse((policy?.policy.desc).replace(/'/g, '"'))
    ))
    return (
        <section className="section__politics section__title-border section__booking-politics">
            <h2>Qué tenés que saber</h2>
            <ul>
                {policy?.map((policy) => (
                    <li key={policy.policy.id}>
                        <h3>{policy.policy.title}</h3>
                        <ul>
                            {listPolicy[policy.policy.id - 1]?.map((list, i) => (
                                <li key={i}>{list}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Politics;