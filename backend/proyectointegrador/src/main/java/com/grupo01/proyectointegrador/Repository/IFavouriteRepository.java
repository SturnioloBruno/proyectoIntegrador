package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.Favourite;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IFavouriteRepository extends JpaRepository<Favourite, Long> {
}
