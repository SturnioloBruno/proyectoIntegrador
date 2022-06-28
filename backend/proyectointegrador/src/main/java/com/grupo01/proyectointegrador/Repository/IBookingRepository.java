package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.Booking;
import com.grupo01.proyectointegrador.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IBookingRepository extends JpaRepository<Booking, Long> {
    Optional<List<Booking>> findByUserId(User user);
}
