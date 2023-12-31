import { Link , useNavigate} from "react-router-dom";
import {useState} from 'react';
import Button from "../Button";
import Login from "./Login";
import '../../styles/Login.css';

function Register({type,handlerUser}) {
    const [errors,setError]=useState({})
    const navigate = useNavigate();

    const handlerSubmit = (e)=>{
        e.preventDefault()

        const nombreValue = document.querySelector("#input__name")
        const apellidoValue = document.querySelector("#input__lastname")
        const emailValue =  document.querySelector("#email_login");
        const passwordValue = document.querySelector("#password_login");
        const passwordRepeat = document.querySelector("#repeat_login");
        let ret;

        //LIMPIO ERRORES 
        setError({})

        //VALIDO EMAIL
        ret = validateInput("EMAIL",emailValue.value)
        if(ret !== ''){   
            setError({email:[ret]})
            return
        }

        //VALIDO PASSWORD
        ret =validateInput("PASSWORD",passwordValue.value)
        if(ret !== ''){       
            setError({password:[ret]})
            return
        }

        //VALIDO PASSWORD REPEAT
        ret =validateInput("PASSWORD",passwordRepeat.value)
        if(ret !== ''){       
            setError({passwordRepeat:[ret]})
            return
        }

        //VALIDO QUE SEAN IGUALES
        if(passwordValue.value.trim()!==passwordRepeat.value.trim()){
            setError({passwordRepeat:["No coinciden las contraseñas"]})
            return
        }

        //ARMO OBJETO DE REGISTRO
        let data = {
            nombre:nombreValue.value.trim(),
            apellido:apellidoValue.value.trim(),
            email:emailValue.value.trim(),
            password:passwordValue.value.trim()
        }

        handlerUser(data)
        navigate("/Login")
    }

    //VALIDO CAMPO EMAIL
    const validateInput = (type,value)=>{ 
        value = value.trim() //hago un trim para sacar los espacios

        switch (type) {
            case 'EMAIL':
                    if (value.length === 0 ){
                        return "El campo es obligatorio"; 
                    }

                    if (!value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ )) {
                        return "El campo email no cumple con el formato";
                   }
                break;
            case 'PASSWORD':
                    if (value.length === 0 ){
                      return "El campo es obligatorio"; 
                    }  

                    if (value.length < 6) {
                         return "La contraseña debe contener más de 6 caracteres"
                    }

                    if (!value.match(/[A-Z]/)) {
                        return "El campo debe contener al menos una letra mayúscula"
                    }

                    if (!value.match(/[a-z]/)) {
                        return "El campo debe contener al menos una letra minúscula"
                    }

                    if (!value.match(/[0-9]/)) {
                        return "El campo debe contener al menos un número"
                    }
                    break;
            default:
                return "Caso no contemplado!";
        }
          
        //RETORNO VACIO NO HUBO ERRORES
        return "";
    }

    //Mostrar u ocultar contraseña
    function show(e) {
        e.preventDefault();
        const input = e.target.previousElementSibling;
        e.target.classList.toggle("show");
        input.type == "password" ? input.type = "text" : input.type = "password";
    }
    
    if(type) document.body.className = `${type}`;

    return (
        <section className="section__form-data">
            <h2>Crear cuenta</h2>
            <form action="POST" onSubmit={handlerSubmit}>
                <label htmlFor="input__name" className="label__input-name">
                    <span>Nombre</span>
                    <input type="text" name="name" id="input__name" autoComplete="off" />
                </label>
                <label htmlFor="input__lastname" className="label__input-name">
                    <span>Apellido</span>
                    <input type="text" name="lastname" id="input__lastname" autoComplete="off" />
                </label>
                <label htmlFor="email_login">
                    <span>Correo electrónico</span>
                    <input type="email" name="email" id="email_login" required autoComplete="off" className={`${errors.email ? "error" : ""}`} />

                    {errors.email?
                    <small className="small__error" id="error_email">{errors.email[0]}</small>:
                    <small className="small__error"></small>
                    }
                </label>
                <label htmlFor="password_login" className='label__password-input'>
                    <span>Contraseña</span>
                    <input type="password" name="password" id="password_login" required autoComplete="off" className={`${errors.password ? "error" : ""}`} />
                    <Link to="#" className="a__show-hide" onClick={show}>Show/Hide</Link>

                    {errors.password?
                    <small className="small__error" id="error_password">{errors.password[0]}</small>:
                    <small className="small__error"></small>
                    }
                </label>
                <label htmlFor="repeat_login" className='label__password-input'>
                    <span>Confirmar contraseña</span>
                    <input type="password" name="password-confirm" id="repeat_login" required className={`${errors.passwordRepeat ? "error" : ""}`} />
                    <Link to="#" className="a__show-hide" onClick={show}>Show/Hide</Link>

                    {errors.passwordRepeat?
                    <small className="small__error" id="error_password">{errors.passwordRepeat[0]}</small>:
                    <small className="small__error"></small>
                    }
                </label>
                <Button text="Crear cuenta" type="submit" className="btn button__solid-type" />
            </form>
            <p>¿Ya tienes una cuenta? <Link to="/login" element={<Login />}>Iniciar sesión</Link></p>
        </section>
    )
  }
  
export default Register;