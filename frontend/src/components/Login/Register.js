import { Link , useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';
import Button from "../Button";
import '../../styles/Login.css';
import { UserContext } from "../Context/UserContext";

function Register({type}) {
    const [errors,setError]=useState({})
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");

    const handlerSubmit = (e)=>{
        e.preventDefault()

        const nombreValue = document.querySelector("#input__name")
        const apellidoValue = document.querySelector("#input__lastname");
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

        const register = async() => {
            await fetch("http://localhost:8080/users/register", {
                method:'POST',
                headers:{
                    "Access-Control-Allow-Headers" : "Content-Type",
                    'Access-Control-Allow-Origin':"*",
                    'Content-Type':'application/json'
                }, body:JSON.stringify ({
                    userName:nombreValue.value.trim(),
                    userSurname:apellidoValue.value.trim(),
                    userEmail:emailValue.value.trim(),
                    userPassword:passwordValue.value.trim(),
                    userCity:"",
                    role: {id:2}
                })
            })
            .then((response) => {
                if(response.status === 201) {
                    login(); // logueo para obtener token
                } else if(response.status === 406) {
                   setError({password:["Ya existe un usuario con el email ingresado"]})
                   return
                } else {
                    setError({password:["Lamentablemente no ha podido registrarse. Por favor intente más tarde"]})
                    return
                }
              }).catch((error) => {
                setError({password:["Error, intente de nuevo mas tarde"]})
                return
              });
        }
        register();

        const login = async() => {
            await fetch("http://localhost:8080/authenticate", {
                method:'POST',
                headers:{
                    "Access-Control-Allow-Headers" : "Content-Type",
                    'Access-Control-Allow-Origin':"*",
                    'Content-Type':'application/json'
                }, body:JSON.stringify({
                    email:emailValue.value.trim(),
                    password:passwordValue.value.trim()
                })
            })
            .then((response) => {
                if(response.status === 200) {
                  return response.json()
                } else {
                   setError({password:["No es posible loguearse"]})
                   return
                }
            })
            .then((token) => {
                if(!token) {
                    return
                }
                sessionStorage.setItem("token",token.jwt)
                findUserData();
            })
            .catch((error) => {
                setError({password:["Error, intente de nuevo mas tarde"]})
                return
            });
        }
    
        const findUserData = async() => {
            await fetch("http://localhost:8080/users/findByEmail/" + emailValue.value.trim(), {
                method:'GET',
                headers: {
                    "Access-Control-Allow-Headers" : "Content-Type"
                }
            })
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    setError({password:["No es posible loguearse"]})
                    return
                }
            })
            .then((user) => {
                if(!user) {
                    return
                }
                setUser(user);
                sessionStorage.setItem("user", JSON.stringify(user));
                navigate("/");
            })
            .catch((error) => {
                setError({password:["Error, intente de nuevo mas tarde"]})
                return
            });
        }
    }

    //VALIDO CAMPO EMAIL
    const validateInput = (type,value) => { 
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
        input.type === "password" ? input.type = "text" : input.type = "password";
    }
    
    if(type) document.body.className = `${type}`;

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name));
        localStorage.setItem("lastname", JSON.stringify(lastname));
        localStorage.setItem("email", JSON.stringify(email));
    }, [name, lastname, email]);

    return (
        <section className="section__form-data">
            <h2>Crear cuenta</h2>
            <form action="POST" onSubmit={handlerSubmit}>
                <label htmlFor="input__name" className="label__input-name">
                    <span>Nombre</span>
                    <input type="text" name="name" id="input__name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label htmlFor="input__lastname" className="label__input-name">
                    <span>Apellido</span>
                    <input type="text" name="lastname" id="input__lastname" autoComplete="off" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </label>
                <label htmlFor="email_login">
                    <span>Correo electrónico</span>
                    <input type="email" name="email" id="email_login" required autoComplete="off" className={`${errors.email ? "error" : ""}`} value={email} onChange={(e) => setEmail(e.target.value)} />

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
            <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
        </section>
    )
  }
  
export default Register;