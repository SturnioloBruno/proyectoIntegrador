import "../../styles/Booking/Hour.css";

function Hour() {
    const hours = [
        { "value": 0, "hour": "00:00AM" },
        { "value": 1, "hour": "01:00AM" },
        { "value": 2, "hour": "02:00AM" },
        { "value": 3, "hour": "03:00AM" },
        { "value": 4, "hour": "04:00AM" },
        { "value": 5, "hour": "05:00AM" },
        { "value": 6, "hour": "06:00AM" },
        { "value": 7, "hour": "07:00AM" },
        { "value": 8, "hour": "08:00AM" },
        { "value": 9, "hour": "09:00AM" },
        { "value": 10, "hour": "10:00AM" },
        { "value": 11, "hour": "11:00AM" },
        { "value": 12, "hour": "12:00AM" },
        { "value": 13, "hour": "13:00AM" },
        { "value": 14, "hour": "14:00AM" },
        { "value": 15, "hour": "05:00AM" },
        { "value": 16, "hour": "16:00AM" },
        { "value": 17, "hour": "17:00AM" },
        { "value": 18, "hour": "18:00AM" },
        { "value": 19, "hour": "19:00AM" },
        { "value": 20, "hour": "20:00AM" },
        { "value": 21, "hour": "21:00AM" },
        { "value": 22, "hour": "22:00AM" },
        { "value": 23, "hour": "23:00AM" }
    ]

    return (
        <section className="section__booking-hour">
            <h2>Tu horario de llegada</h2>
            <div className="div__background-white">
                <p className="p__hotel-room">Tu habitación va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</p>
                <label>
                    <span>Indicá tu horario estimado de llegada</span>
                    <select name="hour" required>
                        <option value="">Seleccionar hora</option>
                        {hours.map((hour, i) => {
                            return <option key={i} value={hour.value}>{hour.hour}</option>;
                        })}
                    </select>
                </label>
            </div>
        </section>
    )
}

export default Hour;