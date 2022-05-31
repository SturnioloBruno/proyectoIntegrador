package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ICategoryRepository extends JpaRepository<Category,Long> {
    Optional<Category> findByTitulo(String cat_title);
}
