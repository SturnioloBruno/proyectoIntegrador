import { Link } from "react-router-dom";

function Modal() {
    function clicButton() {
        document.querySelector("header").className = "";
        document.body.style.overflow = 'unset';
    }

    return (
        <ul className='ul__role-menu'>
            <li><Link to="/login" onClick={clicButton}>Usuarios</Link></li>
            <li><Link to="/admin/login" onClick={clicButton}>Administradores</Link></li>
        </ul>
    )
}

export default Modal;