package com.grupo01.proyectointegrador.Repository;
import com.grupo01.proyectointegrador.Model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ICustomerRepository extends JpaRepository<Customer,Long> {
    Optional<Customer> findByEmail(String cus_email);
}
