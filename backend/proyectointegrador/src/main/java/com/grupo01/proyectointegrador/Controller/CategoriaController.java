package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.Model.Categoria;
import com.grupo01.proyectointegrador.Service.CategoriaService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoriaController {

    @Autowired
    CategoriaService categoriaService;

    @CrossOrigin(origins = "http://localhost:3000")
    @Operation(summary = "Listar todas las categorias")
    @GetMapping("/getList")
    public ResponseEntity<List<Categoria>> listar()throws Exception{
        return ResponseEntity.ok(categoriaService.listarTodos());
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getListNames")
    public ResponseEntity<List<String>> listarTitulos()throws Exception{
        return ResponseEntity.ok(categoriaService.listarTitulos());
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Categoria> buscarId(@PathVariable Long id)throws Exception{
        return ResponseEntity.ok(categoriaService.buscarId(id));
    }

    @GetMapping("/findByName/{titulo}")
    public ResponseEntity<Categoria> buscarId(@PathVariable String titulo)throws Exception{
        return ResponseEntity.ok(categoriaService.buscarTitulo(titulo));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> borrar(@PathVariable Long id) throws Exception{
        categoriaService.borrar(id);
        return ResponseEntity.ok("Categoria borrada con exito!");
    }

    @PutMapping("/update")
    public ResponseEntity<Categoria> actualizar(@RequestBody Categoria categoria)throws Exception{
        return ResponseEntity.ok(categoriaService.actualizar(categoria));
    }

    @PostMapping("/insert")
    public ResponseEntity<Categoria> guardar(@RequestBody Categoria categoria)throws Exception{
        return ResponseEntity.ok(categoriaService.guardar(categoria));
    }
}
