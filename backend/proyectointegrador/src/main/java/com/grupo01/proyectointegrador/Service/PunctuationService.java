package com.grupo01.proyectointegrador.Service;

import com.grupo01.proyectointegrador.Model.Product;
import com.grupo01.proyectointegrador.Model.Punctuation;
import com.grupo01.proyectointegrador.Repository.IProductRepository;
import com.grupo01.proyectointegrador.Repository.IPunctuationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PunctuationService {

    @Autowired
    IPunctuationRepository punctuationRepository;

    @Autowired
    ProductService productService;

    @Autowired
    IProductRepository productRepository;

    public Punctuation buscarId (Long id) throws Exception {
        Optional<Punctuation> punctuationOptional = punctuationRepository.findById(id);
        return punctuationOptional.orElse(null);
    }

    public Punctuation guardar(Punctuation punctuation) throws Exception {
        //inserto la puntuacion
        Punctuation punctuationInsertada =punctuationRepository.save(punctuation);

        Long cantidad = punctuationRepository.countByProdId(punctuation.getProdId());
        Long suma = punctuationRepository.sumByProdId(punctuation.getProdId());

        Product product = productService.buscarPorId(punctuation.getProdId().getId());

        product.setPunctuation(Math.round(suma/cantidad));
        productRepository.save(product);

        return punctuationInsertada;
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

    public Long totalPunctuation(Long id)throws Exception{
        return punctuationRepository.countByProdId(productService.buscarPorId(id));
    }
}
