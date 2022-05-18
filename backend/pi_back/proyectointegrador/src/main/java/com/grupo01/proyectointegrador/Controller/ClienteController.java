package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.Model.Cliente;
import com.grupo01.proyectointegrador.Service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    ClienteService clienteService;

    @GetMapping("/listar")
    public ResponseEntity<List<Cliente>> listar()throws Exception{
        return ResponseEntity.ok(clienteService.listarTodos());
    }

    @GetMapping("/buscarId/{id}")
    public ResponseEntity<Cliente> buscarId(@PathVariable Long id)throws Exception{
        return ResponseEntity.ok(clienteService.buscarId(id));
    }

    @GetMapping("/buscarEmail/{email}")
    public ResponseEntity<Cliente> buscarEmail(@PathVariable String email)throws Exception{
        return ResponseEntity.ok(clienteService.buscarEmail(email));
    }

    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<String> borrar(@PathVariable Long id) throws Exception{
        clienteService.borrar(id);
        return ResponseEntity.ok("Categoria borrada con exito!");
    }

    @PutMapping("/actualizar")
    public ResponseEntity<Cliente> actualizar(@RequestBody Cliente cliente)throws Exception{
        return ResponseEntity.ok(clienteService.actualizar(cliente));
    }

    @PostMapping("/guardar")
    public ResponseEntity<Cliente> guardar(@RequestBody Cliente cliente)throws Exception{
        return ResponseEntity.ok(clienteService.guardar(cliente));
    }
}
