package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.DTO.ProductDTO;
import com.grupo01.proyectointegrador.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface IProductRepository extends JpaRepository<Product, Long> {
    Optional<List<Product>> findByCityId(@Param("idCiudad") Long idCiudad);
    Optional<List<Product>> findByCategoryId(@Param("idCategory") Long idCategory);
}

