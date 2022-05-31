package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IImageRepository extends JpaRepository<Image,Long> {
    Optional <List<Image>> findByProId(Long pro_id);
}
