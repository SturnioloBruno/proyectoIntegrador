import { Link , useNavigate} from "react-router-dom";
import Button from "../Button";
import Register from "./Register";
import '../../styles/Login.css';
import {useState} from 'react';

function Login({handlerUser, type}) {
    const [errors,setError]=useState({})
    const navigate = useNavigate();
    const userValidate = {email:"admin@admin.com",
                          password:"Admin1234"}

    const handlerSubmit = (e)=>{
        e.preventDefault()

        const emailValue =  document.querySelector("#email_login");
        const passwordValue = document.querySelector("#password_login");
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

      //VALIDO CONTRA PASSWORDD Y EMAIL ESTATICO DESPUES SE CAMBIA POR FETCH
      if(emailValue.value.trim() !== userValidate.email){
        setError({password:["Por favor vuelva a intentarlo, sus credenciales son inválidas"]})
        return
        }else if(passwordValue.value.trim() !== userValidate.password){
            setError({password:["Por favor vuelva a intentarlo, sus credenciales son inválidas"]})
            return
        }

        handlerUser({nombre:"Admin",apellido:"Admin"})
        navigate("/")
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

    return (
        <section className={`section__form-data ${errors.email || errors.password ? "error" : ""}`}>
            <h2>Iniciar sesión</h2>
            <form action="POST" onSubmit={handlerSubmit}>
                <label htmlFor="">
                    <span>Correo electrónico</span>
                    <input type="email" name="email" id="email_login" required autoComplete="on"/>
                    
                    {errors.email?
                     <small className="small__error" id="error_email">{errors.email[0]}</small>:
                     <small className="small__error"></small>}

                </label>

                <label htmlFor="" className='label__password-input'>
                    <span>Contraseña</span>
                    <input type="password" name="password" id="password_login" required autoComplete="on"/>
                    
                    {errors.password?
                    <small className="small__error" id="error_password">{errors.password[0]}</small>:
                    <small className="small__error"></small>
                    }

                </label>

                <Button text="Ingresar" type="submit" className="btn button__solid-type" />
            </form>
            <p>¿Aún no tenes cuenta? <Link to="/register" element={<Register />}>Registrate</Link></p>
        </section>
    )
  }
  
export default Login;