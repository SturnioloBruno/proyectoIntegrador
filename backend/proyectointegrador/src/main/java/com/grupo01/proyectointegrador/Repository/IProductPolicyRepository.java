package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.ProductPolicy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductPolicyRepository extends JpaRepository<ProductPolicy, Long> {
}
