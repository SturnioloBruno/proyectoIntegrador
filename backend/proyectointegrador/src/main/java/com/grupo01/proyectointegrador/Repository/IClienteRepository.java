package com.grupo01.proyectointegrador.Repository;
import com.grupo01.proyectointegrador.Model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IClienteRepository extends JpaRepository<Cliente,Long> {
    Optional<Cliente> findByEmail(String cli_email);
}
