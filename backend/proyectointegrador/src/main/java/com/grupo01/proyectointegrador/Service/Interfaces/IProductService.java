package com.grupo01.proyectointegrador.Service.Interfaces;

import com.grupo01.proyectointegrador.Model.Product;
import com.grupo01.proyectointegrador.DTO.ProductDTO;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.Set;

public interface IProductService {
    void crearProduct(Product product) throws Exception;
    //ProductDTO save(ProductDTO productDTO) throws Exception;
    Set<ProductDTO> getProducts() throws Exception;
    ProductDTO buscarPorIdDTO(Long id) throws Exception;
    void delete(Long id) throws Exception;
    ProductDTO update(ProductDTO productDTO) throws Exception;
    //Set<Product> findByCityId(@Param("idCiudad") Long idCiudad)throws Exception;
}

