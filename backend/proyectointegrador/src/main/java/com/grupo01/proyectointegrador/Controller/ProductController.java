package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.Model.Product;
import com.grupo01.proyectointegrador.DTO.ProductDTO;
import com.grupo01.proyectointegrador.Service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.*;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;

<<<<<<< Updated upstream
    @CrossOrigin(origins = {"http://localhost:3000","http://10.0.0.9"})
=======

>>>>>>> Stashed changes
    @Operation(summary = "retorna producto segun el id")
    @GetMapping("/findById/{id}")
    public ResponseEntity<ProductDTO> findByIDDTO(@PathVariable Long id)throws Exception{
        return ResponseEntity.ok(productService.buscarPorIdDTO(id));
    }

<<<<<<< Updated upstream
    @CrossOrigin(origins = {"http://localhost:3000","http://10.0.0.9"})
=======

>>>>>>> Stashed changes
    @Operation(summary = "retorna productos segun filtros")
    @GetMapping("/getListProducts")
    public List<ProductDTO> getListProduct(@RequestParam Optional<Long> city,
                                           @RequestParam Optional<Long> category,
                                           @RequestParam Optional<String> dateStart,
                                           @RequestParam Optional<String> dateEnd,
                                           @RequestParam Optional<Boolean> sort)throws  Exception{

        return  productService.findByFilter(city,category,dateStart,dateEnd,sort);
    }

<<<<<<< Updated upstream
    @CrossOrigin(origins = {"http://localhost:3000","http://10.0.0.9"})
=======

>>>>>>> Stashed changes
    @Operation(summary = "crea un producto")
    @PostMapping("/insert")
    public ResponseEntity<Product> createProduct(@RequestBody Product product)throws Exception{
        return ResponseEntity.ok(productService.crearProduct(product));
    }
}
