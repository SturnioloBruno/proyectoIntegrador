package com.grupo01.proyectointegrador.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo01.proyectointegrador.Model.Product;
import com.grupo01.proyectointegrador.DTO.ProductDTO;
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
    @Autowired
    ObjectMapper mapper;

    @Override
    public void crearProduct(Product product) throws Exception{
        productRepository.save(product);
    }

    @Override
    public Set<ProductDTO> getProducts() throws Exception{
        List<Product> listaProducts = productRepository.findAll();
        Set<ProductDTO> productsDTO = new HashSet<>();

        for (Product p: listaProducts){
            productsDTO.add(mapper.convertValue(p,ProductDTO.class));
        }
        return productsDTO;
    }

    @Override
    public ProductDTO buscarPorId(Long id) throws Exception{
        Optional<Product> product = productRepository.findById(id);
        ProductDTO productEncontrado = null;
        if (product.isPresent()){
            productEncontrado = mapper.convertValue(product.get(),ProductDTO.class);
        }
        return productEncontrado;
    }

    /*
    ---- servicio repetido con el de createProduct------

    public ProductDTO save(ProductDTO productDTO) throws Exception{
        Product product=mapper.convertValue(productDTO,Product.class);
        productRepository.save(product);
        return  productDTO;
    }

     */

    public void delete(Long id)throws Exception{
        // verifico que existe
        ProductDTO product = buscarPorId(id);

        if(product == null){
            throw new Exception("Producto con id: "+ id + " no existe");
        }

        productRepository.deleteById(id);
    }

    public ProductDTO update(ProductDTO productDTO) throws Exception{
        ProductDTO productBuscado = buscarPorId(productDTO.getId());

        if(productBuscado == null){
            throw new Exception("Producto con id: "+ productDTO.getId() + " no existe");
        }

        Product product=mapper.convertValue(productDTO,Product.class);
        productRepository.save(product);
        return productDTO;
    }


}

