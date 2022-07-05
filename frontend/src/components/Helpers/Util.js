  //VALIDO CAMPO EMAIL
  const validateInput = (type,value)=>{ 
    value = value.trim() //hago un trim para sacar los espacios

    //PRIMERO VALIDO QUE TENGA ALGUN VALOR
     if (value.length === 0 ){
                    return "El campo es obligatorio"; 
                }

    switch (type) {
        case 'EMAIL':           
                if (!value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ )) {
                    return "El campo email no cumple con el formato";
               }
            break;
        case 'PASSWORD':
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
        case "NUMERIC":
                if(isNaN(value)){
                    return "El campo debe ser numerico"
                }
                break;
        case "TEXT":
            break;
        default:
            return "Caso no contemplado!";
    }
      
    //RETORNO VACIO NO HUBO ERRORES
    return "";
}

export default validateInput;