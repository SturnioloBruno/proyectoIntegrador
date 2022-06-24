package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IUserRepository extends JpaRepository<User,Long> {
    Optional<User> findByUserEmail(String cus_email);
}
