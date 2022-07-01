import { useState } from "react";
import "../../styles/Admin/UploadImages.css";

function UploadImages() {
    const [input, setInput] = useState([{image: ''}]);

    const handleInputChange = (e, i) => {
        const {value} = e.target;
        const list = [...input];
        list[i].image = value;
        setInput(list);
    }

    const handleAddClick = () => {
        setInput([...input, {image: ''}]);
    }

    const handleRemoveClick = i => {
        const list = [...input];
        list.splice(i, 1);
        setInput(list);
    }

    return (
        <>
        {input.map((element, i) => {
            return(
                <div className='div__upload-images div__btn-actions' key={i}>
                    <input type="text" placeholder="Insertar https://" name="img" value={element.image} required onChange={e => handleInputChange(e, i)} />
                    {input.length !== 1 && input.length !== i + 1 &&
                        <a className='btn btn__remove-img' onClick={()=> handleRemoveClick(i)}>Borrar</a>
                    }
                    {input.length === i + 1 &&
                        <a className='btn btn__add-img' onClick={handleAddClick}>Agregar</a>
                    }
                </div>
            )
        })}
        </>
    )
}

export default UploadImages;