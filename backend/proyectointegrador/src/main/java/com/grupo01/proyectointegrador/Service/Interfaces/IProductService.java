package com.grupo01.proyectointegrador.Service.Interfaces;

import com.grupo01.proyectointegrador.Model.Product;
import com.grupo01.proyectointegrador.DTO.ProductDTO;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    //ProductDTO save(ProductDTO productDTO) throws Exception;
    List<ProductDTO> getProducts(Optional<Boolean> sort) throws Exception;
    ProductDTO buscarPorIdDTO(Long id) throws Exception;
    void delete(Long id) throws Exception;
    ProductDTO update(ProductDTO productDTO) throws Exception;
    //Set<Product> findByCityId(@Param("idCiudad") Long idCiudad)throws Exception;
}

