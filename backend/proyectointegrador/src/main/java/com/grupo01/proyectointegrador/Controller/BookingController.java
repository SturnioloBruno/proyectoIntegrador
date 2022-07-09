package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.DTO.BookingDTO;
import com.grupo01.proyectointegrador.Model.Booking;
import com.grupo01.proyectointegrador.Service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    BookingService bookingService;

    @PostMapping("/insert")
    public ResponseEntity<Booking> guardar(@RequestBody BookingDTO booking) throws Exception {
        return ResponseEntity.ok(bookingService.guardar(booking));
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Booking> buscarId(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(bookingService.buscarId(id));
    }

    @GetMapping("/findByUserId/{id}")
    public ResponseEntity<List<BookingDTO>> findByUserId(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(bookingService.getByUserId(id));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> borrar(@PathVariable Long id) throws Exception {
        bookingService.borrar(id);
        return ResponseEntity.ok("Reserva borrada con exito");
    }
}
