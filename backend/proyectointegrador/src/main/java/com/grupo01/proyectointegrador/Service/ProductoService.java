package com.grupo01.proyectointegrador.Service;

import com.grupo01.proyectointegrador.Model.Producto;
import com.grupo01.proyectointegrador.Repository.IProductoRepository;
import com.grupo01.proyectointegrador.Service.Interfaces.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
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

    public Producto save(Producto producto) throws Exception{
        return productoRepository.save(producto);
    }

    public void delete(Long id)throws Exception{
        // verifico que existe
        Producto producto = buscarPorId(id);

        if(producto == null){
            throw new Exception("Producto con id: "+ id + " no existe");
        }

        productoRepository.deleteById(id);
    }

    public Producto update(Producto producto) throws Exception{
        Producto productoBuscado = buscarPorId(producto.getId());

        if(productoBuscado== null){
            throw new Exception("Producto con id: "+ producto.getId() + " no existe");
        }

        return productoRepository.save(producto);
    }


}

