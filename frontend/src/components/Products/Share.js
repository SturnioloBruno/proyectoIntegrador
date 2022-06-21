import { Link } from "react-router-dom";
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon } from "react-share";
import "../../styles/Products/Share.css";

function Share() {
    const url = window.location;

    //Para cerrar la modal
    function closeModal(e) {
        e.preventDefault();
        document.querySelector(".div__modal-share").classList.add("none");
    }

    return (
        <div className="div__modal-share none">
            <Link to="#" className="a__close-modal" onClick={closeModal}>Cerrar</Link>
            <div className="div__background-white">
                <h2>Comparte en redes sociales</h2>
                <FacebookShareButton url={url}>
                    <FacebookIcon size={40} round={true}></FacebookIcon>
                </FacebookShareButton>
                <LinkedinShareButton url={url}>
                    <LinkedinIcon size={40} round={true}></LinkedinIcon>
                </LinkedinShareButton>
                <TwitterShareButton url={url}>
                    <TwitterIcon size={40} round={true}></TwitterIcon>
                </TwitterShareButton>
                <WhatsappShareButton url={url}>
                    <WhatsappIcon size={40} round={true}></WhatsappIcon>
                </WhatsappShareButton>
            </div>
        </div>
    )
}

export default Share;