package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Long> {
}
