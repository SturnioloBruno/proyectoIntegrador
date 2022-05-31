package com.grupo01.proyectointegrador.Service.Interfaces;

import com.grupo01.proyectointegrador.Model.Producto;

import java.util.Set;

public interface IProductoService {
    void crearProducto(Producto producto) throws Exception;
    Set<Producto> getProductos() throws Exception;
    Producto buscarPorId(Long id) throws Exception;
}

