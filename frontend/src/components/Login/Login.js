import { useContext, useState } from 'react';
import { Link , useNavigate } from "react-router-dom";
import Button from "../Button";
import '../../styles/Login.css';
import { UserContext } from "../Context/UserContext";
import Api from "../Helpers/Api";
import validateInput from '../Helpers/Util';

function Login({ type }) {
    const [errors,setError]=useState({})
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);
    const [email, setEmail] = useState("");

    const handlerSubmit = (e)=>{
        e.preventDefault()

        const emailValue =  document.querySelector("#email_login");
        const passwordValue = document.querySelector("#password_login");
        let ret ;
 
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
        
        const login = async() => {
            await fetch(Api + "authenticate", {
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
                if (response.status === 200) {
                  return response.json()
                } else if(response.status === 406){
                   setError({email:["La cuanta ingresada no ha sido confirmada"]})
                   return
                }else{
                    setError({password:["No es posible loguearse"]})
                   return
                }
            })
            .then((user)=>{
                if(!user){
                    return
                }
                localStorage.setItem("token",user.jwt)
                findUserData();
            })
            .catch((error) => {
                setError({password:["Error, intente de nuevo mas tarde"]})
                return
            });
        }
        login();
    
        const findUserData = async()=>{
            await fetch(Api + "users/findByEmail/" + emailValue.value.trim(), {
                method:'GET',
                headers: {
                    "Access-Control-Allow-Headers" : "Content-Type"
                }
            })
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                } else{
                    setError({password:["No es posible loguearse"]})
                    return
                }
            })
            .then((user)=>{
                if(!user){
                    return
                }
                setUser(user);
                localStorage.setItem("user", JSON.stringify(user));
                sessionStorage.getItem("url") === null ? navigate("/") : navigate(sessionStorage.getItem("url"));
                sessionStorage.removeItem("msg");
            })
            .catch((error) => {
                setError({password:["Error, intente de nuevo mas tarde"]})
                return
            });
        }
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
            {sessionStorage.getItem("msg") !== null ? <p className='p__login-error'>{sessionStorage.getItem("msg")}</p> : "" }
            <form action="POST" onSubmit={handlerSubmit}>
                <label htmlFor="email_login">
                    <span>Correo electrónico</span>
                    <input type="email" name="email" id="email_login" required className={`${errors.email ||errors.general ? "error" : ""}`} autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email?
                    <small className="small__error" id="error_email">
                        {errors.email?errors.email:''}
                    </small> : "" }
                </label>

                <label htmlFor="password_login" className='label__password-input'>
                    <span>Contraseña</span>
                    <input type="password" name="password" id="password_login" data-testid="password_input" required className={`${errors.password || errors.general? "error" : ""}`} autoComplete="off" />
                    <Link to="#" className="a__show-hide" onClick={show}>Show/Hide</Link>
                    
                    {errors.password || errors.general ?
                    <small className="small__error" id="error_password">
                        {errors.password?errors.password:''}
                        {errors.general?errors.general:''}
                    </small> : "" }
                </label>
                <Button text="Ingresar" type="submit" className="btn button__solid-type" />
            </form>
            <p>¿Aún no tenes cuenta? <Link to="/register">Registrate</Link></p>
        </section>
    )
  }
  
export default Login;