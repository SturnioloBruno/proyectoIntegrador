import "../../styles/Booking/Hour.css";

function Hour() {
    return (
        <section className="section__booking-hour">
            <h2>Tu horario de llegada</h2>
            <div className="div__background-white">
                <p className="p__hotel-room">Tu habitación va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</p>
                <label>
                    <span>Indicá tu horario estimado de llegada</span>
                    <select name="hour" required>
                        <option defaultValue={"Seleccionar hora"}>Seleccionar hora</option>
                        <option value="00">00:00AM</option>
                        <option value="01">01:00AM</option>
                        <option value="02">02:00AM</option>
                    </select>
                </label>
            </div>
        </section>
    )
}

export default Hour;