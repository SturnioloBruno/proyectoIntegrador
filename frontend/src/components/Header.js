import React, { useState } from "react";
import Title from "./Title";
import Link from "./Link";
import '../styles/Header.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <Title />
            <div className={`${isOpen ? 'div__open-menu' : ''}`}>
                <a href="#" className="a__button-nav" onClick={toggle}>Abrir/Cerrar</a>
                <div className="div__menu-bar">
                    <p>Menú</p>
                    <nav>
                        <ul className="ul__bar-links">
                            <li><Link className="" text="Crear cuenta" /></li>
                            <li><Link className="" text="Iniciar sesión" /></li>
                        </ul>
                        <ul className="ul__social-links">
                            <li><a href="#" className="a__icon-fb">Facebook</a></li>
                            <li><a href="#" className="a__icon-li">LinkedIn</a></li>
                            <li><a href="#" className="a__icon-tw">Twitter</a></li>
                            <li><a href="#" className="a__icon-ig">Instagram</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;