import { useContext ,useEffect, useState} from 'react';
import Title from "./Title";
import Modal from "./Modal";
import '../styles/Header.css';
import { Link } from "react-router-dom";
import { UserContext } from './Context/UserContext';

function Header() {
    const {user, setUser} = useContext(UserContext);
    let [typeLogin, setTypeLogin] = useState(false);
    let [typeRegister, setTypeRegister] = useState(false);

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
        if(typeLogin == true) setTypeLogin(typeLogin = false);
        if(typeRegister == true) setTypeRegister(typeRegister = false);
    }

    const handleChangeLogin = () => {
        typeLogin == false ? setTypeLogin(typeLogin = true) : setTypeLogin(typeLogin = false);
        if(typeLogin == true) setTypeRegister(typeRegister = false);
    }

    const handleChangeRegister = () => {
        typeRegister == false ? setTypeRegister(typeRegister = true) : setTypeRegister(typeRegister = false);
        if(typeRegister == true) setTypeLogin(typeLogin = false);
    }

    return (
        <header>
            <Title />
            <div>
                <Link to="#" className="a__button-nav" onClick={clicNav}>Abrir/Cerrar</Link>
                <div className="div__menu-bar">
                    <div className={"div__menu-login"}>
                        {user ?
                        <div className="div__user-login">
                            <span>{user?.userName[0] + user?.userSurname[0]}</span>
                            <p>Hola, <span>{`${user?.userName} ${user?.userSurname}`}</span></p>
                        </div>
                        :<p>Menú</p>
                        }
                    </div>
                    <div className={`div__menu-navigation ${user ? "login" : ""}`}>
                        {user ? ""
                        :<>
                        <nav>
                            <ul className="ul__bar-links">
                                <li>
                                    <span onClick={handleChangeLogin}>Iniciar sesión</span>
                                    {typeLogin == true && typeRegister == false ? 
                                    <ul className='ul__role-menu'>
                                        <li><Link to="/login" onClick={clicButton}>Usuarios</Link></li>
                                        <li><Link to="/admin/login" onClick={clicButton}>Administradores</Link></li>
                                    </ul>
                                    : ""}
                                </li>
                                <li>
                                    <span onClick={handleChangeRegister}>Crear cuenta</span>
                                    {typeRegister == true && typeLogin == false ?
                                    <ul className='ul__role-menu'>
                                        <li><Link to="/register" onClick={clicButton}>Usuarios</Link></li>
                                        <li><Link to="/admin/register" onClick={clicButton}>Administradores</Link></li>
                                    </ul>
                                 : ""}
                                </li>
                            </ul>
                        </nav>
                        </>}
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