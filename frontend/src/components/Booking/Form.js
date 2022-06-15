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
            </div>
        </section>
    )
}

export default Form;