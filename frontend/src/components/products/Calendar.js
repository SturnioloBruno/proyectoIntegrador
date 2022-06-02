import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/products/Calendar.css";

function Calendar() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    const mobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            className="myDatePicker"
            excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
            selectsDisabledDaysInRange
            monthsShown= {mobile ? 1 : 2}
            inline
        />
    );
}
export default Calendar;