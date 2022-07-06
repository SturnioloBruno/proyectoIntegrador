import { useState, useEffect } from "react";
import "../../styles/Admin/UploadAttributes.css";
import Api from "../Helpers/Api";

function UploadImages() {
    const [characteristics, setCharacteristics] = useState(null);
    const [input, setInput] = useState([{id:'', title: '', icon: ''}]);
    const arrayOptions = []

    useEffect(()=>{
        //Cargo características
        const getCharacteristics = async()=>{
            await fetch(Api + "characteristics/getList/", {
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(function(response){
                return response.json();
            })
            .then(function (characteristics) {
                setCharacteristics(characteristics);
            })
        }      
        getCharacteristics();
    }, []);

    const handleInputChange = (e, i) => {   
        const {value} = e.target;  
        const list = [...input];
        list[i].id = value;
        const filter = arrayOptions.filter(element => element.id ==value);
        list[i].icon = filter[0].icon;
        setInput(list);
    }

    const handleAddClick = () => {
        setInput([...input, {id:'',title: '', icon: ''}]);
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
                <div className='div__info-attributes div__btn-actions' key={i}>
                    <div className="div__label-input">
                        <label>
                            <span>Nombre</span>
                            <select name="attribute" className="select__option" id="select__option-attribute" required
                             value={element.id} onChange={e => handleInputChange(e, i)}>
                                <option defaultValue="Seleccione una opción">Seleccione una opción</option>
                                {characteristics?.map((characteristic, i) => {
                                    arrayOptions.push({id:characteristic.id,title: characteristic.title, icon: characteristic.charactClass})
                                    return <option key={i} value={characteristic.id}>{characteristic.title}</option>;
                                })}
                            </select>
                        </label>
                        <label>
                            <span>Ícono</span>
                            <input type="text" name="icon_class" placeholder="1" value={element.icon} disabled />
                        </label>
                    </div>
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