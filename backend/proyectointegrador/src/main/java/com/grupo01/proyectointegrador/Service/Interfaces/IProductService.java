package com.grupo01.proyectointegrador.Service.Interfaces;

import com.grupo01.proyectointegrador.Model.Product;

import java.util.Set;

public interface IProductService {
    void crearProduct(Product product) throws Exception;
    Set<Product> getProducts() throws Exception;
    Product buscarPorId(Long id) throws Exception;
}

