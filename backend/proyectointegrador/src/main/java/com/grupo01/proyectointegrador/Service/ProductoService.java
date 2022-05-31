package com.grupo01.proyectointegrador.Service;

import com.grupo01.proyectointegrador.Model.Producto;
import com.grupo01.proyectointegrador.Repository.IProductoRepository;
import com.grupo01.proyectointegrador.Service.Interfaces.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public class ProductoService implements IProductoService {
    @Autowired
    private IProductoRepository productoRepository;


    @Override
    public void crearProducto(Producto producto) throws Exception{
        productoRepository.save(producto);
    }

    @Override
    public Set<Producto> getProductos() throws Exception{
        List<Producto> listaProductos = productoRepository.findAll();
        Set<Producto> productos = new HashSet<>();

        for (Producto p:listaProductos){
            productos.add(p);
        }
        return productos;
    }

    @Override
    public Producto buscarPorId(Long id) throws Exception{
        Optional<Producto> producto = productoRepository.findById(id);
        Producto productoEncontrado = null;
        if (producto.isPresent()){
            productoEncontrado= producto.get();
        }
        return  productoEncontrado;
    }
}

