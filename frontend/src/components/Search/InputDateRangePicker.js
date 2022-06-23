import React, { useEffect, useState} from "react";
import { DateRangePicker } from "react-dates";
import { useLocation } from "react-router-dom";
import "react-dates/lib/css/_datepicker.css";
import "../../styles/Search/DateRangePicker.css";
import "react-dates/initialize";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const InputDateRangePicker = ({handlerDates}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInpuf] = useState(null);
  const location = useLocation();

  //evento para que cambie dinamicamente
  const numberOfMonths = () => {
    if (window.innerWidth < 1024) {
      return 1;
    } else {
      return 2;
    }
  };

  useEffect(()=>{
    //SI NO ESTA EN EL HOME MUESTRO FECHAS GUARDADAS
    if(location.pathname !== "/"){
      if(sessionStorage.getItem("dateStart")&&sessionStorage.getItem("dateEnd")){
        let objStart = new Date(sessionStorage.getItem("dateStart"))
        let objEnd = new Date(sessionStorage.getItem("dateEnd"))
  
          setStartDate(moment(objStart))
          setEndDate(moment(objEnd))
      }
    }else{
          sessionStorage.removeItem("dateStart")
          sessionStorage.removeItem("dateEmd")
    }

  },[location.pathname]);

  return (
    <>
      <DateRangePicker
        startDatePlaceholderText={"Check in"}
        endDatePlaceholderText={"Check out"}
        showDefaultInputIcon={true}
        customArrowIcon={"-"}
        startDate={startDate} //requerido
        startDateId="day" //requerido
        endDate={endDate} //requerido
        endDateId="day" //requerido
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
          handlerDates(startDate,endDate);
        }} //Requerido
        focusedInput={focusedInput} // Requerido
        onFocusChange={(focusedInput) => setFocusedInpuf(focusedInput)} // Requerido
        monthFormat={"MMMM"} //formato de como muestra el Mes
        numberOfMonths={numberOfMonths()} //cantidad de meses que muestra
        showClearDates={true}
      />
    </>
  );
};

export default InputDateRangePicker;
