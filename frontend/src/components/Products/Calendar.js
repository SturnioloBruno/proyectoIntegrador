import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/Products/Calendar.css";
import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es);

function Calendar({bookings , handlerChange,error}) {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const mobile = useMediaQuery({ query: '(max-width: 767px)' });
    const [bookingsDates,setBookingsDates] = useState(null);

    useEffect(()=>{

        if(sessionStorage.getItem("dateStart")&&sessionStorage.getItem("dateEnd")){
            let objStart = new Date(sessionStorage.getItem("dateStart"))
            let objEnd = new Date(sessionStorage.getItem("dateEnd"))

            setDateRange([objStart,objEnd]);
        }

        //SI HAY RESERVAS ARMO ARRAY CON FECHAS
        if(bookings){
            let arrayBookings = [];
            bookings.forEach(booking => {
             
                //HAGO SPLIT PARA ARMAR EL FORMATO DE FECHA
                let dateStartSplit = booking.bookingStartDate.split("-")
                let dateEndSplit = booking.bookingFinishDate.split("-")

                let dateStart = new Date(dateStartSplit[1]+"/"+dateStartSplit[2]+"/"+dateStartSplit[0]);
                let dateEnd = new Date(dateEndSplit[1]+"/"+dateEndSplit[2]+"/"+dateEndSplit[0]);

                //RECORRO Y ARMO ARRAY DE RESERVAS
              do {
                    arrayBookings.push(dateStart)
                    dateStart = addDays(dateStart,1) 
                    
                } while (dateStart.toString() !== dateEnd.toString());
            });

            setBookingsDates(arrayBookings);
        }

    },[bookings]);

    return (
        <DatePicker 
            locale="es"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
                //SI SELECCIONO AMBAS FECHAS CHEQUEO QUE ESTEN DISPONIBLES
                if(update[0]&&update[1]){
                    let date = update[0]

                    do {
                        //AGREGO ESTA VARIABLE POR INDICACION DE REACT (EVITA EL WARNING)
                        let dateString = date.toString()

                        //BUSCO EN LAS FECHAS RESERVADAS LAS QUE MARCO
                        let filterResult = bookingsDates?.filter(item=>item.toString()===dateString)

                        //SI MARCO UNA RESERVADA LE BORRO LA SELECCION
                        if(filterResult.length>0){
                            setDateRange([null, null]);
                            sessionStorage.removeItem("dateStart");
                            sessionStorage.removeItem("dateEnd");
                            error("Debes seleccionar un rango de fechas válido")
                            return
                        }

                        date = addDays(date,1) 
                        
                    } while (date.toString() !== update[1].toString());

                    //SI PASO HASTA ACA ES PORQUE NO SELECCIONO FECHAS RESERVADAS
                    setDateRange(update)  
                    let start = update[0].getFullYear() + "/"+(update[0].getMonth()+1) + "/" + update[0].getDate()
                    let end = update[1].getFullYear() + "/"+(update[1].getMonth()+1) + "/" + update[1].getDate()
                    sessionStorage.setItem("dateStart",JSON.stringify(start))
                    sessionStorage.setItem("dateEnd",JSON.stringify(end))
                    handlerChange()
                }  
            
            //SI SOLO SELECCIONO LA FECHA INICIAL DEJO SETEAR
            if(update[0]&&!update[1])setDateRange(update)       
            }}
            isClearable={true}
            className="myDatePicker"
            excludeDates={bookingsDates}
           // excludeDateIntervals={[{start: new Date(),end:new Date()}]}// ver de simplificar utilizando esta forma
            selectsDisabledDaysInRange
            monthsShown= {mobile ? 1 : 2}
            minDate ={new Date()}
            inline
        />
    );
}
export default Calendar;