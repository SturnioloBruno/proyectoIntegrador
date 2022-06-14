package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.Model.User;
import com.grupo01.proyectointegrador.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/insert")
    public ResponseEntity<User> guardar(@RequestBody User user) throws Exception {
        return ResponseEntity.ok(userService.guardar(user));
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<User> buscarId(@PathVariable Long id) throws Exception{
        return ResponseEntity.ok(userService.buscarId(id));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> borrar(@PathVariable Long id) throws Exception {
        userService.borrar(id);
        return ResponseEntity.ok("Usuario borrado con exito");
    }

    @PutMapping("/update")
    public ResponseEntity<User> actualizar(@RequestBody User user) throws Exception {
        return ResponseEntity.ok(userService.guardar(user));
    }
}
