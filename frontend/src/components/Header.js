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
    const [open, setOpen] = useState(false);

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
        if(open == true) setOpen(open = false);
    }

    const handleChangeRegister = () => {
        typeRegister == false ? setTypeRegister(typeRegister = true) : setTypeRegister(typeRegister = false);
    }

    function handleChangeOpen() {
        open == false ? setOpen(true) : setOpen(false);
    }

    return (
        <header>
            <Title />
            <div className='div__nav-menu'>
                <Link to="#" className="a__button-nav" onClick={clicNav}>Abrir/Cerrar</Link>
                <div className="div__menu-bar">
                    <div className={`div__menu-login ${role == "ADMIN" ? "admin" : ""}`}>
                        {user ?
                        <div className="div__user-login" onClick={handleChangeOpen}>
                            <span>{user?.userName[0] + user?.userSurname[0]}</span>
                            <p role= "banner">Hola, <span>{`${user?.userName} ${user?.userSurname}`}</span></p>
                        </div>
                        :<p>Menú</p>
                        }
                        {user && role == "ADMIN" && !mobile && <Link to="/administration">Administración</Link>}
                    </div>
                    <div className="div__menu-navigation">
                        <nav>
                            {user && mobile &&
                            <ul className="ul__bar-admin">
                                {role == "ADMIN" &&
                                <li><Link to="/administration">Administración</Link></li>}
                                <li><Link to="/my-bookings" onClick={clicButton}>Mis reservas</Link></li>
                                <li><Link to="/my-favourites" onClick={clicButton}>Mis favoritos</Link></li>
                            </ul>}
                            {open && !mobile &&
                            <ul className="ul__bar-admin">
                                <li><Link to="/my-bookings" onClick={clicButton}>Mis reservas</Link></li>
                                <li><Link to="/my-favourites" onClick={clicButton}>Mis favoritos</Link></li>
                            </ul>}
                            {!user &&
                            <ul className="ul__bar-buttons">
                                <li><Link to="/login" onClick={clicButton} data-testid="on-click-login">Iniciar sesión</Link></li>
                                <li>
                                    <span onClick={handleChangeRegister} data-testid="on-click-register">Crear cuenta</span>
                                    {typeRegister == true ?
                                    <ul className='ul__role-menu'>
                                        <li><Link to="/admin/register" onClick={clicButton}>Administradores</Link></li>
                                    </ul>
                                : ""}
                                </li>
                            </ul>}
                        </nav>
                        <div className="div__social-menu" data-testid="on-click-logout">
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