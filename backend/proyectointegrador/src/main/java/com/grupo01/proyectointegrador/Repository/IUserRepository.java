package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User,Long> {
}
