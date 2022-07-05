import { useContext ,useEffect, useState} from 'react';
import Title from "./Title";
import '../styles/Header.css';
import { Link } from "react-router-dom";
import { UserContext } from './Context/UserContext';
import { useMediaQuery } from 'react-responsive';

function Header() {
    const {user, setUser} = useContext(UserContext);
    let [typeRegister, setTypeRegister] = useState(false);
    const role = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).role.roleName : "";
    const mobile = useMediaQuery({ query: '(max-width: 768px)' });

    useEffect(()=>{
        if(localStorage.getItem("user")){
            setUser(JSON.parse(localStorage.user));
        }
    },[]);

    function clicNav() {
        document.querySelector("header").classList.toggle("div__open-menu");
        document.querySelector("header").className === "div__open-menu" ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
    }

    function clicButton() {
        document.querySelector("header").className = "";
        document.body.style.overflow = 'unset';
        if(typeRegister == true) setTypeRegister(typeRegister = false);
    }

    const handleChangeRegister = () => {
        typeRegister == false ? setTypeRegister(typeRegister = true) : setTypeRegister(typeRegister = false);
    }

    return (
        <header>
            <Title />
            <div>
                <Link to="#" className="a__button-nav" onClick={clicNav}>Abrir/Cerrar</Link>
                <div className="div__menu-bar">
                    <div className={`div__menu-login ${role == "ADMIN" ? "admin" : ""}`}>
                        {user ?
                        <div className="div__user-login">
                            <span>{user?.userName[0] + user?.userSurname[0]}</span>
                            <p>Hola, <span>{`${user?.userName} ${user?.userSurname}`}</span></p>
                        </div>
                        :<p>Menú</p>
                        }
                        {user && role == "ADMIN" && !mobile && <Link to="/administration">Administración</Link>}
                    </div>
                    <div className="div__menu-navigation">
                        <nav>
                            {user && role == "ADMIN" && mobile &&
                            <ul className="ul__bar-admin">
                                <li><Link to="/administration">Administración</Link></li>
                            </ul>}
                            {!user &&
                            <ul className="ul__bar-buttons">
                                <li>Iniciar sesión</li>
                                <li>
                                    <span onClick={handleChangeRegister}>Crear cuenta</span>
                                    {typeRegister == true ?
                                    <ul className='ul__role-menu'>
                                        <li><Link to="/register" onClick={clicButton}>Usuarios</Link></li>
                                        <li><Link to="/admin/register" onClick={clicButton}>Administradores</Link></li>
                                    </ul>
                                : ""}
                                </li>
                            </ul>}
                        </nav>
                        <div className="div__social-menu">
                           {user?<span>¿Deseas <Link to="/" onClick={()=>{
                                setUser(undefined)
                                localStorage.removeItem("token");
                                localStorage.removeItem("user");
                                sessionStorage.removeItem("msg");
                                sessionStorage.removeItem("url");
                                sessionStorage.removeItem("dateStart")
                                sessionStorage.removeItem("dateEnd")
                            }}>cerrar sesión</Link>?</span>:''}
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