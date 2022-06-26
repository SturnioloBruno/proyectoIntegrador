package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.Model.Category;
import com.grupo01.proyectointegrador.Service.CategoryService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @Operation(summary = "Listar todas las categorias")
    @GetMapping("/getList")
    public ResponseEntity<List<Category>> listar()throws Exception{
        return ResponseEntity.ok(categoryService.listarTodos());
    }

    @GetMapping("/getListNames")
    public ResponseEntity<List<String>> listarTitulos()throws Exception{
        return ResponseEntity.ok(categoryService.listarTitulos());
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Category> buscarId(@PathVariable Long id)throws Exception{
        return ResponseEntity.ok(categoryService.buscarId(id));
    }

    @GetMapping("/findByName/{titulo}")
    public ResponseEntity<Category> buscarId(@PathVariable String titulo)throws Exception{
        return ResponseEntity.ok(categoryService.buscarTitulo(titulo));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> borrar(@PathVariable Long id) throws Exception{
        categoryService.borrar(id);
        return ResponseEntity.ok("Categoria borrada con exito!");
    }

    @PutMapping("/update")
    public ResponseEntity<Category> actualizar(@RequestBody Category category)throws Exception{
        return ResponseEntity.ok(categoryService.actualizar(category));
    }

    @PostMapping("/insert")
    public ResponseEntity<Category> guardar(@RequestBody Category category)throws Exception{
        return ResponseEntity.ok(categoryService.guardar(category));
    }
}
