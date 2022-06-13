import {useContext, useState} from 'react';
import { Link , useNavigate} from "react-router-dom";
import Button from "../Button";
import '../../styles/Login.css';
import { UserContext } from "../Context/UserContext";

function Login({ type }) {
    const [errors,setError]=useState({})
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);

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

        const validate = async()=>{
            await fetch("http://localhost:8080/customers/validate",{
                method:'POST',
                headers:{
                    "Access-Control-Allow-Headers" : "Content-Type",
                    'Access-Control-Allow-Origin':"*",
                    'Content-Type':'application/json'
                },body:JSON.stringify({
                    email:emailValue.value.trim(),
                    password:passwordValue.value.trim()
                })
            })
            .then((response) => {
                if (response.status === 200) {
                  return response.json()        
                }else{
                   setError({password:["Por favor vuelva a intentarlo, sus credenciales son inválidas"]})
                   return
                }
              })
              .then((user)=>{
                if(!user){
                    return
                }
                setUser(user)  
                navigate("/")   
              })
              .catch((error) => {
                setError({password:["Error, intente de nuevo mas tarde"]})
                return
              });
        }
    
        validate();
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

    if(type) document.body.className = `${type}`;

    //Mostrar u ocultar contraseña
    function show(e) {
        e.preventDefault();
        document.querySelector(".a__show-hide").classList.toggle("show");
        document.querySelector("#password_login").type === "password" ? document.querySelector("#password_login").type = "text" : document.querySelector("#password_login").type = "password";
    }

    return (
        <section className="section__form-data">
            <h2>Iniciar sesión</h2>
            <form action="POST" onSubmit={handlerSubmit}>
                <label htmlFor="email_login">
                    <span>Correo electrónico</span>
                    <input type="email" name="email" id="email_login" required className={`${errors.email ||errors.general ? "error" : ""}`} autoComplete="off" />
                </label>

                <label htmlFor="password_login" className='label__password-input'>
                    <span>Contraseña</span>
                    <input type="password" name="password" id="password_login" required className={`${errors.password || errors.general? "error" : ""}`} autoComplete="off" />
                    <Link to="#" className="a__show-hide" onClick={show}>Show/Hide</Link>
                    
                    {errors.password||errors.email||errors.general?
                    <small className="small__error" id="error_password">{
                        errors.password?errors.password:''}
                        {errors.email?errors.email:''}
                        {errors.general?errors.general:''}</small>:
                    <small className="small__error"></small>
                    }
                </label>

                <Button text="Ingresar" type="submit" className="btn button__solid-type" />
            </form>
            <p>¿Aún no tenes cuenta? <Link to="/register">Registrate</Link></p>
        </section>
    )
  }
  
export default Login;