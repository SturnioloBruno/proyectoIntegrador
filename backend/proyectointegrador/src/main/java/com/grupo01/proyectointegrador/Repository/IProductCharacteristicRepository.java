package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.ProductCharacteristic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductCharacteristicRepository extends JpaRepository<ProductCharacteristic, Long> {
}
