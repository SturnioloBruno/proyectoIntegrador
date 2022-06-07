package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.Punctuation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPunctuationRepository extends JpaRepository<Punctuation, Long> {
}
