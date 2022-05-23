package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.Model.Cliente;
import com.grupo01.proyectointegrador.Service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
public class ClienteController {

    @Autowired
    ClienteService clienteService;

    @GetMapping("/getList")
    public ResponseEntity<List<Cliente>> listar()throws Exception{
        return ResponseEntity.ok(clienteService.listarTodos());
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Cliente> buscarId(@PathVariable Long id)throws Exception{
        return ResponseEntity.ok(clienteService.buscarId(id));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/findByEmail/{email}")
    public ResponseEntity<Cliente> buscarEmail(@PathVariable String email)throws Exception{
        return ResponseEntity.ok(clienteService.buscarEmail(email));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> borrar(@PathVariable Long id) throws Exception{
        clienteService.borrar(id);
        return ResponseEntity.ok("Categoria borrada con exito!");
    }

    @PutMapping("/update")
    public ResponseEntity<Cliente> actualizar(@RequestBody Cliente cliente)throws Exception{
        return ResponseEntity.ok(clienteService.actualizar(cliente));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/insert")
    public ResponseEntity<Cliente> guardar(@RequestBody Cliente cliente)throws Exception{
        return ResponseEntity.ok(clienteService.guardar(cliente));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/validate")
    public ResponseEntity<String> validarCliente(@RequestBody Cliente cliente)throws Exception{
        String mensaje="";
        if(clienteService.validarCliente(cliente.getEmail(),cliente.getPassword())){
            mensaje="Usuario validado";
        }
        return ResponseEntity.ok(mensaje);
    }
}
