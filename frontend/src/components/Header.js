import Title from "./Title";
import Button from "./Button";

function Header() {
    return (
        <header>
            <Title />
            <div>
                <Button className="btn btn-header" text="Crear cuenta" />
                <Button className="btn btn-header" text="Iniciar sesión" />
            </div>
        </header>
    )
}

export default Header;