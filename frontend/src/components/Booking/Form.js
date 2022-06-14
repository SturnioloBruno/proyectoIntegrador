import "../../styles/Booking/Form.css";

function Form() {
    return (
        <section className="section__booking-form">
            <h2>Completá tus datos</h2>
            <div className="div__background-white">
                <label>
                    <span>Nombre</span>
                    <input type="text" name="name" disabled />
                </label>
                <label>
                    <span>Apellido</span>
                    <input type="text" name="lastname" disabled />
                </label>
                <label>
                    <span>Correo electronico</span>
                    <input type="email" name="email" disabled />
                </label>
                <label>
                    <span>Ciudad</span>
                    <input type="text" name="city" required />
                </label>
            </div>
        </section>
    )
}

export default Form;