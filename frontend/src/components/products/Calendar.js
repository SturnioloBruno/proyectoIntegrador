import React, { useState,useContext, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/products/Calendar.css";
import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import { SearchContext } from "../Context/SearchContext";
registerLocale('es', es);

function Calendar() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const mobile = useMediaQuery({ query: '(max-width: 767px)' });
    const {endDateCache,startDateCache} = useContext(SearchContext);

    useEffect(()=>{

        if(startDateCache&&endDateCache){
            setDateRange([startDateCache._d,endDateCache._d]);
        }

    },[endDateCache,startDateCache]);

    return (
        <DatePicker 
            locale="es"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
                setDateRange(update);
            }}
            isClearable={true}
            className="myDatePicker"
            excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
            selectsDisabledDaysInRange
            monthsShown= {mobile ? 1 : 2}
            inline
        />
    );
}
export default Calendar;