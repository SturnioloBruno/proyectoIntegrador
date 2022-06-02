package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface IProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM products WHERE p.city_id LIKE %:idCiudad%")
    public Optional<Set<Product>> findByCity(@Param("idCiudad") Long idCiudad);
}

