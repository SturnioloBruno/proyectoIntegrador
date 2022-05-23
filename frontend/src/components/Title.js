import { Link } from "react-router-dom";

function Title() {
    return (
        <Link to="/" className="div__title-header">
            <h1>Digital Booking</h1>
            <p>Sentite como en tu hogar</p>
        </Link>
    )
}

export default Title;