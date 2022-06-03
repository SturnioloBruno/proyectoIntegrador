package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.Characteristic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICharacteristicRepository extends JpaRepository<Characteristic,Long> {
}
