import React, { useState,useContext, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/products/Calendar.css";
import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import { SearchContext } from "../Context/SearchContext";
registerLocale('es', es);

function Calendar() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const { endDateCache,startDateCache } = useContext(SearchContext);
    const mobile = useMediaQuery({ query: '(max-width: 767px)' });

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
   
    useEffect(()=>{
        if(endDateCache&&startDateCache){
            setEndDate(endDateCache._d);
            setStartDate(startDateCache._d)
        }

    },[endDateCache,startDateCache])

    return (
        <DatePicker
            locale="es"
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            selectsStart={startDateCache}
            className="myDatePicker"
          //  excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
            selectsDisabledDaysInRange
            monthsShown= {mobile ? 1 : 2}
            inline
        />
    );
}
export default Calendar;