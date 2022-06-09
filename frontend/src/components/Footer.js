import { Link } from "react-router-dom";
import '../styles/Footer.css';

function Footer() {
    return (
        <footer>
            <p>©2022 Digital Booking</p>
            <ul>
                <li><Link to="#" className="a__fb-white">Facebook</Link></li>
                <li><Link to="#" className="a__li-white">LinkedIn</Link></li>
                <li><Link to="#" className="a__tw-white">Twitter</Link></li>
                <li><Link to="#" className="a__ig-white">Instagram</Link></li>
            </ul>
        </footer>
    )
}

export default Footer;