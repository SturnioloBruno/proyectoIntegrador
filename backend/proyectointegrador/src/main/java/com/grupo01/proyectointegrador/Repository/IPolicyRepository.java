package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.Policy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPolicyRepository extends JpaRepository<Policy, Long> {
}
