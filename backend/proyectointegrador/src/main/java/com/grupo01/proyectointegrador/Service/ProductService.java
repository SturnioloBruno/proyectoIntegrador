package com.grupo01.proyectointegrador.Service;

import com.grupo01.proyectointegrador.Model.Product;
import com.grupo01.proyectointegrador.Repository.IProductRepository;
import com.grupo01.proyectointegrador.Service.Interfaces.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public void crearProduct(Product product) throws Exception{
        productRepository.save(product);
    }

    @Override
    public Set<Product> getProducts() throws Exception{
        List<Product> listaProducts = productRepository.findAll();
        Set<Product> products = new HashSet<>();

        for (Product p: listaProducts){
            products.add(p);
        }
        return products;
    }

    @Override
    public Product buscarPorId(Long id) throws Exception{
        Optional<Product> product = productRepository.findById(id);
        Product productEncontrado = null;
        if (product.isPresent()){
            productEncontrado = product.get();
        }
        return productEncontrado;
    }

    public Product save(Product product) throws Exception{
        return productRepository.save(product);
    }

    public void delete(Long id)throws Exception{
        // verifico que existe
        Product product = buscarPorId(id);

        if(product == null){
            throw new Exception("Producto con id: "+ id + " no existe");
        }

        productRepository.deleteById(id);
    }

    public Product update(Product product) throws Exception{
        Product productBuscado = buscarPorId(product.getId());

        if(productBuscado == null){
            throw new Exception("Producto con id: "+ product.getId() + " no existe");
        }

        return productRepository.save(product);
    }


}

