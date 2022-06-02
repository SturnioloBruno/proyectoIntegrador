package com.grupo01.proyectointegrador.Service.Interfaces;

import com.grupo01.proyectointegrador.Model.Product;
import com.grupo01.proyectointegrador.DTO.ProductDTO;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public interface IProductService {
    void crearProduct(Product product) throws Exception;
    //ProductDTO save(ProductDTO productDTO) throws Exception;
    Set<ProductDTO> getProducts() throws Exception;
    ProductDTO buscarPorId(Long id) throws Exception;
    void delete(Long id) throws Exception;
    ProductDTO update(ProductDTO productDTO) throws Exception;
    List<Product> findByCity(Long idCiudad) throws Exception;
}

