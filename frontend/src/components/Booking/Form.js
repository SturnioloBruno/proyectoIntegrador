import { useContext } from "react";
import "../../styles/Booking/Form.css";
import { UserContext } from "../Context/UserContext";

function Form() {
    const {user} = useContext(UserContext);

    return (
        <section className="section__booking-form">
            <h2>Completá tus datos</h2>
            <div className="div__background-white">
                <label>
                    <span>Nombre</span>
                    <input type="text" name="name" value={user?.userName} disabled />
                </label>
                <label>
                    <span>Apellido</span>
                    <input type="text" name="lastname" value={user?.userSurname} disabled />
                </label>
                <label>
                    <span>Correo electronico</span>
                    <input type="email" name="email" value={user?.userEmail} disabled />
                </label>
                <label>
                    <span>Ciudad</span>
                    <input type="text" name="city" required />
                </label>
                <label className="label__description">
                    <span>Datos para el vendedor (opcional)</span>
                    <textarea name="textarea"></textarea>
                </label>
                <label htmlFor="label__covid" className="label__covid">
                    <span>¿Se encuentra vacunado contra el COVID-19?</span>
                    <input type="checkbox" name="covid" id="label__covid" required />
                </label>
            </div>
        </section>
    )
}

export default Form;