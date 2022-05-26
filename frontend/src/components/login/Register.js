import { Link } from "react-router-dom";
import Button from "../Button";
import Login from "./Login";
import '../../styles/Login.css';

function Register({ type }) {
    if(type) document.body.className = `${type}`;

    return (
        <section className="section__form-data">
            <h2>Crear cuenta</h2>
            <form>
                <label htmlFor="input__name" className="label__input-name">
                    <span>Nombre</span>
                    <input type="text" name="name" id="input__name" />
                </label>
                <label htmlFor="input__lastname" className="label__input-name">
                    <span>Apellido</span>
                    <input type="text" name="lastname" id="input__lastname" />
                </label>
                <label htmlFor="input__email">
                    <span>Correo electrónico</span>
                    <input type="email" name="email" id="input__email" />
                </label>
                <label htmlFor="input__password" className='label__password-input'>
                    <span>Contraseña</span>
                    <input type="password" name="password" id="input__password" />
                </label>
                <label htmlFor="input__password-repeat" className='label__password-input'>
                    <span>Confirmar contraseña</span>
                    <input type="password" name="password-confirm" id="input__password-repeat" />
                </label>
                <Button text="Crear cuenta" type="submit" className="btn button__solid-type" />
            </form>
            <p>¿Ya tienes una cuenta? <Link to="/login" element={<Login />}>Iniciar sesión</Link></p>
        </section>
    )
  }
  
export default Register;