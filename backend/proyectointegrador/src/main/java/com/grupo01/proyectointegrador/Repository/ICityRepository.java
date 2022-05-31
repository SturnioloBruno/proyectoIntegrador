package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICityRepository extends JpaRepository<City,Long> {
}
