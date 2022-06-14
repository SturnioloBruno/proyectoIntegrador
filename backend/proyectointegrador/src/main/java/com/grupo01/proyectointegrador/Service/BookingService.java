package com.grupo01.proyectointegrador.Service;

import com.grupo01.proyectointegrador.Model.Booking;
import com.grupo01.proyectointegrador.Repository.IBookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    IBookingRepository bookingRepository;

    public Booking guardar(Booking booking) throws Exception {
        return bookingRepository.save(booking);
    }

    public Booking buscarId(Long id) throws Exception {
        Optional<Booking> booking = bookingRepository.findById(id);
        return booking.orElse(null);
    }

    public void borrar (Long id) throws Exception {
        Booking booking = buscarId(id);
        if(booking != null) {
            bookingRepository.deleteById(id);
        }
        else{
            throw new Exception("Reserva con id: "+ id + " no existe");
        }
    }

    public Booking actualizar (Booking booking) throws Exception {
        Booking booking1 = buscarId(booking.getId());
        if (booking1 != null){
            return bookingRepository.save(booking);
        }
        else{
            throw new Exception("Reserva con id: "+ booking.getId() + " no existe");
        }
    }
}
