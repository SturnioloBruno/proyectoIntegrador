package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.Model.Categoria;
import com.grupo01.proyectointegrador.Service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    CategoriaService categoriaService;

    @GetMapping("/listar")
    public ResponseEntity<List<Categoria>> listar()throws Exception{
        return ResponseEntity.ok(categoriaService.listarTodos());
    }

    @GetMapping("/listarTitulos")
    public ResponseEntity<List<String>> listarTitulos()throws Exception{
        return ResponseEntity.ok(categoriaService.listarTitulos());
    }

    @GetMapping("/buscarId/{id}")
    public ResponseEntity<Categoria> buscarId(@PathVariable Long id)throws Exception{
        return ResponseEntity.ok(categoriaService.buscarId(id));
    }

    @GetMapping("/buscarNombre/{nombre}")
    public ResponseEntity<Categoria> buscarId(@PathVariable String titulo)throws Exception{
        return ResponseEntity.ok(categoriaService.buscarTitulo(titulo));
    }

    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<String> borrar(@PathVariable Long id) throws Exception{
        categoriaService.borrar(id);
        return ResponseEntity.ok("Categoria borrada con exito!");
    }

    @PutMapping("/actualizar")
    public ResponseEntity<Categoria> actualizar(@RequestBody Categoria categoria)throws Exception{
        return ResponseEntity.ok(categoriaService.actualizar(categoria));
    }

    @PostMapping("/guardar")
    public ResponseEntity<Categoria> guardar(@RequestBody Categoria categoria)throws Exception{
        return ResponseEntity.ok(categoriaService.guardar(categoria));
    }
}
