package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.Model.Product;
import com.grupo01.proyectointegrador.Service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @CrossOrigin(origins = "http://localhost:3000")
    @Operation(summary = "retorna producto segun el id")
    @GetMapping("/findById/{id}")
    public ResponseEntity<Product> findByID(@PathVariable Long id)throws Exception{
        return ResponseEntity.ok(productService.buscarPorId(id));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @Operation(summary = "retorna producto segun el id")
    @GetMapping("/getListProducts")
    public ResponseEntity<Set<Product>> getListProduct(@PathVariable Long id)throws Exception{
        return ResponseEntity.ok(productService.getProducts());
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @Operation(summary = "crea un producto")
    @PostMapping("/insert")
    public ResponseEntity<?> createProduct(@RequestBody Product product)throws Exception{
        productService.crearProduct(product);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
