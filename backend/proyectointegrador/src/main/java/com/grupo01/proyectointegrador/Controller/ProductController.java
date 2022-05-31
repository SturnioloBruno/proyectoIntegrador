package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.Model.Producto;
import com.grupo01.proyectointegrador.Service.ProductoService;
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
    ProductoService productoService;

    @CrossOrigin(origins = "http://localhost:3000")
    @Operation(summary = "retorna producto segun el id")
    @GetMapping("/findById/{id}")
    public ResponseEntity<Producto> findByID(@PathVariable Long id)throws Exception{
        return ResponseEntity.ok(productoService.buscarPorId(id));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @Operation(summary = "retorna producto segun el id")
    @GetMapping("/getListProducts")
    public ResponseEntity<Set<Producto>> getListProduct(@PathVariable Long id)throws Exception{
        return ResponseEntity.ok(productoService.getProductos());
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @Operation(summary = "crea un producto")
    @PostMapping("/insert")
    public ResponseEntity<?> createProduct(@RequestBody Producto producto)throws Exception{
        productoService.crearProducto(producto);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
