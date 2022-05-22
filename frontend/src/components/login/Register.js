import Button from "../Button";
import '../../styles/Login.css';

function Login() {
    return (
        <section class="section__form-data">
            <h2>Crear cuenta</h2>
            <form>
                <label htmlFor="" className="label__input-name">
                    <span>Nombre</span>
                    <input type="text" name="name" id="" />
                </label>
                <label htmlFor="" className="label__input-name">
                    <span>Apellido</span>
                    <input type="text" name="lastname" id="" />
                </label>
                <label htmlFor="">
                    <span>Correo electrónico</span>
                    <input type="email" name="email" id="" />
                </label>
                <label htmlFor="" className='label__password-input'>
                    <span>Contraseña</span>
                    <input type="password" name="password" id="" />
                </label>
                <label htmlFor="" className='label__password-input'>
                    <span>Confirmar contraseña</span>
                    <input type="password" name="password-confirm" id="" />
                </label>
                <Button text="Crear cuenta" type="submit" className="btn button__solid-type" />
            </form>
            <p>¿Ya tienes una cuenta? <a href=''>Crear cuenta</a></p>
        </section>
    )
  }
  
export default Login;