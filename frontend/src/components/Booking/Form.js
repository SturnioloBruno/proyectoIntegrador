import "../../styles/Booking/Form.css";

function Form() {
    const name = JSON.parse(localStorage.getItem("name"));
    const lastname = JSON.parse(localStorage.getItem("lastname"));
    const email = JSON.parse(localStorage.getItem("email"));
    
    return (
        <section className="section__booking-form">
            <h2>Completá tus datos</h2>
            <div className="div__background-white">
                <label>
                    <span>Nombre</span>
                    <input type="text" name="name" value={name} disabled />
                </label>
                <label>
                    <span>Apellido</span>
                    <input type="text" name="lastname" value={lastname} disabled />
                </label>
                <label>
                    <span>Correo electronico</span>
                    <input type="email" name="email" value={email} disabled />
                </label>
                <label>
                    <span>Ciudad</span>
                    <input type="text" name="city" required />
                </label>
                <label className="label__description">
                    <span>Datos para el vendedor (opcional)</span>
                    <textarea></textarea>
                </label>
                <label for="label__covid" className="label__covid">
                    <span>¿Se encuentra vacunado contra el COVID-19?</span>
                    <input type="checkbox" name="covid" id="label__covid" required />
                </label>
            </div>
        </section>
    )
}

export default Form;