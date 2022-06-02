package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM products WHERE p.city_id = ?1")
    public Optional<List<Product>> findByCity(Long idCiudad);
}

