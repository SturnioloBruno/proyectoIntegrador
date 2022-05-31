package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.Model.Categoria;
import com.grupo01.proyectointegrador.Model.Producto;
import com.grupo01.proyectointegrador.Service.ProductoService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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

}
