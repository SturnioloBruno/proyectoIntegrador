package com.grupo01.proyectointegrador.Service;

import com.grupo01.proyectointegrador.Model.Punctuation;
import com.grupo01.proyectointegrador.Repository.IPunctuationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PunctuationService {

    @Autowired
    IPunctuationRepository punctuationRepository;

    public Punctuation buscarId (Long id) throws Exception {
        Optional<Punctuation> punctuationOptional = punctuationRepository.findById(id);
        return punctuationOptional.orElse(null);
    }

    public Punctuation guardar(Punctuation punctuation) throws Exception {
        return punctuationRepository.save(punctuation);
    }

    public void borrar(Long id) throws Exception {
        Punctuation punctuation = buscarId(id);
        if(punctuation == null){
            throw new Exception("Puntuación con id: "+ id + " no existe");
        }
        else{
            punctuationRepository.deleteById(id);
        }
    }

    public Punctuation actualizar(Punctuation punctuation) throws Exception {
        Punctuation punctuation1 = buscarId(punctuation.getId());
        if(punctuation1 == null){
            throw new Exception("Puntuación con id: "+ punctuation.getId() + " no existe");
        }
        else {
            return punctuationRepository.save(punctuation);
        }
    }
}
