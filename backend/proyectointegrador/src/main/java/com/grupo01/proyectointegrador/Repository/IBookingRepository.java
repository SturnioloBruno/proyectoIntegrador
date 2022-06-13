package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBookingRepository extends JpaRepository<Booking, Long> {
}
