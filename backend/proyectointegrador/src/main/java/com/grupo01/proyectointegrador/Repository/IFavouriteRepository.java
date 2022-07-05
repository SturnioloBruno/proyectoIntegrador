package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.Favourite;
import com.grupo01.proyectointegrador.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IFavouriteRepository extends JpaRepository<Favourite, Long> {
    Optional<List<Favourite>> getByUserId(User user);
}
