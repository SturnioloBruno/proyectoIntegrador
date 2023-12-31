import Title from "./Title";
import '../styles/Header.css';
import { Link } from "react-router-dom";
import Login from "./login/Login";
import Register from "./login/Register";

function Header({user,handlerLogOut}) {
    function clicNav() {
        document.querySelector("header").classList.toggle("div__open-menu");
        document.querySelector("header").className == "div__open-menu" ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
    }

    function clicButton() {
        document.querySelector("header").className = "";
        document.body.style.overflow = 'unset';
    }

    return (
        <header>
            <Title />
            <div>
                <Link to="#" className="a__button-nav" onClick={clicNav}>Abrir/Cerrar</Link>
                <div className="div__menu-bar">
                    <div className={"div__menu-login"}>
                        {user?.user? 
                        <div className="div__user-login">
                            {console.log(user)}
                            <span>{user.user?user.user.nombre[0]+user.user.apellido[0]:''}</span>
                            <p>Hola, <span>{`${user.user?.nombre} ${user.user?.apellido}`}</span></p>
                        </div>
                        :<p>Menú</p>
                        }
                    </div>
                    <div className={`div__menu-navigation ${user?.user? "login":""}`}>
                        {user?.user? ""
                        :<nav>
                            <ul className="ul__bar-links">
                            <li><Link to="/login" element={<Login />} id="link__login-btn" onClick={clicButton}>Iniciar sesión</Link></li>
                            <li><Link to="/register" element={<Register />} id="link__register-btn" onClick={clicButton}>Crear cuenta</Link></li>
                            </ul>
                        </nav>}
                        <div className="div__social-menu">
                           {user?.user?<span>¿Deseas <Link to="#" onClick={()=>handlerLogOut(null)}>cerrar sesión</Link>?</span>:''}
                            <ul className="ul__social-links">
                                <li><Link to="#" className="a__icon-fb">Facebook</Link></li>
                                <li><Link to="#" className="a__icon-li">LinkedIn</Link></li>
                                <li><Link to="#" className="a__icon-tw">Twitter</Link></li>
                                <li><Link to="#" className="a__icon-ig">Instagram</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;