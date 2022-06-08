import React from "react";
import { DateRangePicker } from "react-dates";
import { useEffect, useState} from "react";
import "react-dates/lib/css/_datepicker.css";
import "../../styles/DateRangePicker.css";
import "react-dates/initialize";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const InputDateRangePicker = ({handlerDates,endDateCache,startDateCache}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInpuf] = useState(null);

  //evento para que cambie dinamicamente
  const numberOfMonths = () => {
    if (window.innerWidth < 1024) {
      return 1;
    } else {
      return 2;
    }
  };

  useEffect(()=>{

    if(endDateCache&&startDateCache){
        setStartDate(startDateCache)
        setEndDate(endDateCache)
    }

  },[endDateCache,startDateCache]);

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
        required={true}
        monthFormat={"MMMM"} //formato de como muestra el Mes
        numberOfMonths={numberOfMonths()} //cantidad de meses que muestra
        showClearDates={true}
      />
    </>
  );
};

export default InputDateRangePicker;
