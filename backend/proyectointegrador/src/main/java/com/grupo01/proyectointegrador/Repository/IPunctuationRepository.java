package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.Product;
import com.grupo01.proyectointegrador.Model.Punctuation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface IPunctuationRepository extends JpaRepository<Punctuation, Long> {
    Long countByProdId(Product prodId);
    @Query("SELECT SUM(P.punctValue) FROM Punctuation P WHERE P.prodId = ?1")
    Long sumByProdId(Product prodId);
}
