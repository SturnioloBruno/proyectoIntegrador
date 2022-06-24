package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.Model.Role;
import com.grupo01.proyectointegrador.Service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/roles")
public class RoleController {

    @Autowired
    RoleService roleService;

    @PostMapping("/insert")
    public ResponseEntity<Role> guardar(@RequestBody Role role) throws Exception {
        return ResponseEntity.ok(roleService.guardar(role));
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Role> buscarId(@PathVariable Long id) throws Exception{
        return ResponseEntity.ok(roleService.buscarId(id));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> borrar(@PathVariable Long id) throws Exception {
        roleService.borrar(id);
        return ResponseEntity.ok("Rol borrado con exito");
    }

    @PutMapping("/update")
    public ResponseEntity<Role> actualizar(@RequestBody Role role) throws Exception {
        return ResponseEntity.ok(roleService.guardar(role));
    }
}
