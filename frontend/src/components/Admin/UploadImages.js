import ReactDOMServer from 'react-dom/server';
import "../../styles/Admin/CreateHotel.css";

function UploadImages() {
    let array = [];

    function clickBtn(e) {
        e.preventDefault();
        array.push(ReactDOMServer.renderToString(<UploadImages />));
        document.querySelector(".section__upload-images").innerHTML += array;
    }

    return (
        <div className='div__upload-images'>
            <input type="text" placeholder="Insertar https://" name="img" required />
            <a className='btn button__solid-type btn__upload-img' onClick={clickBtn}>Agregar</a>
        </div>
    )
}

export default UploadImages;