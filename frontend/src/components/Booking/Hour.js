import "../../styles/Booking/Hour.css";

function Hour() {
    const hours = [
        { "value": "00:00:00", "hour": "00:00AM" },
        { "value": "01:00:00", "hour": "01:00AM" },
        { "value": "02:00:00", "hour": "02:00AM" },
        { "value": "03:00:00", "hour": "03:00AM" },
        { "value": "04:00:00", "hour": "04:00AM" },
        { "value": "05:00:00", "hour": "05:00AM" },
        { "value": "06:00:00", "hour": "06:00AM" },
        { "value": "07:00:00", "hour": "07:00AM" },
        { "value": "08:00:00", "hour": "08:00AM" },
        { "value": "09:00:00", "hour": "09:00AM" },
        { "value": "10:00:00", "hour": "10:00AM" },
        { "value": "11:00:00", "hour": "11:00AM" },
        { "value": "12:00:00", "hour": "12:00AM" },
        { "value": "13:00:00", "hour": "13:00AM" },
        { "value": "14:00:00", "hour": "14:00AM" },
        { "value": "15:00:00", "hour": "05:00AM" },
        { "value": "16:00:00", "hour": "16:00AM" },
        { "value": "17:00:00", "hour": "17:00AM" },
        { "value": "18:00:00", "hour": "18:00AM" },
        { "value": "19:00:00", "hour": "19:00AM" },
        { "value": "20:00:00", "hour": "20:00AM" },
        { "value": "21:00:00", "hour": "21:00AM" },
        { "value": "22:00:00", "hour": "22:00AM" },
        { "value": "23:00:00", "hour": "23:00AM" }
    ]

    return (
        <section className="section__booking-hour">
            <h2>Tu horario de llegada</h2>
            <div className="div__background-white">
                <p className="p__hotel-room">Tu habitación va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</p>
                <label>
                    <span>Indicá tu horario estimado de llegada</span>
                    <select name="hour" id="select__option-hour">
                        <option value="">Seleccionar hora</option>
                        {hours.map((hour, i) => {
                            return <option data-testid="select-option" key={i} value={hour.value}>{hour.hour}</option>;
                        })}
                    </select>
                </label>
            </div>
        </section>
    )
}

export default Hour;