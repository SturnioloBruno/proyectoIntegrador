import React, { Fragment, useState } from "react";
import Title from "./Title";
import '../styles/Header.css';
import { Link } from "react-router-dom";
import Login from "./login/Login";
import Register from "./login/Register";

function Header({user,handlerUser}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)
    {(isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset')};


    
    return (
        <header className={`${isOpen ? 'div__open-menu' : ''}`}>
            <Title />
            <div>
                <a href="#" className="a__button-nav" onClick={toggle}>Abrir/Cerrar</a>
                <div className="div__menu-bar">
                    <div className={"div__menu-login"}>
                        {user? 
                        <div className="div__user-login">
                            <span>BR</span>
                            <p>Hola, <span>{`${user?.nombre} ${user?.apellido}`}</span></p>
                        </div>
                        :<p>Menú</p>
                        }
                    </div>
                    <div className={`div__menu-navigation ${user? "login":""}`}>
                        {user? ""
                        :<nav>
                            <ul className="ul__bar-links">
                            <li><Link to="/login" element={<Login />} id="link__login-btn">Iniciar sesión</Link></li>
                            <li><Link to="/register" element={<Register />} id="link__register-btn">Crear cuenta</Link></li>
                            </ul>
                        </nav>}
                        <div className="div__social-menu">
                           {user?<span>¿Deseas <a href="#"  onClick={()=>handlerUser({})}>cerrar sesión</a>?</span>:''}
                            <ul className="ul__social-links">
                                <li><a href="#" className="a__icon-fb">Facebook</a></li>
                                <li><a href="#" className="a__icon-li">LinkedIn</a></li>
                                <li><a href="#" className="a__icon-tw">Twitter</a></li>
                                <li><a href="#" className="a__icon-ig">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;