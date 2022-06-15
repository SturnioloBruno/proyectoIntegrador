package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.DTO.UserDTO;
import com.grupo01.proyectointegrador.Model.User;
import com.grupo01.proyectointegrador.Service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;

    @CrossOrigin(origins = "http://localhost:3000")
    @Operation(summary = "crea un usuario")
    @PostMapping("/insert")
    public ResponseEntity<UserDTO> guardar(@RequestBody UserDTO userDTO) throws Exception {
        return ResponseEntity.status(201).body(userService.guardar(userDTO));
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<User> buscarId(@PathVariable Long id) throws Exception{
        return ResponseEntity.ok(userService.buscarId(id));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/findByEmail/{email}")
    public ResponseEntity<User> buscarEmail(@PathVariable String email) throws Exception{
        return ResponseEntity.ok(userService.buscarEmail(email));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> borrar(@PathVariable Long id) throws Exception {
        userService.borrar(id);
        return ResponseEntity.ok("Usuario borrado con exito");
    }

    @PutMapping("/update")
    @Operation(summary = "actualiza un usuarioDTO")
    public ResponseEntity<UserDTO> actualizar(@RequestBody UserDTO userDTO) throws Exception {
        return ResponseEntity.ok(userService.actualizar(userDTO));
    }
}
