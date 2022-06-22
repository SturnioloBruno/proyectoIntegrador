package com.grupo01.proyectointegrador.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo01.proyectointegrador.DTO.UserDTO;
import com.grupo01.proyectointegrador.DTO.UserDTOResponse;
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

    @Autowired
    ObjectMapper mapper;

    @CrossOrigin(origins = "http://localhost:3000")
    @Operation(summary = "crea un usuario")
    @PostMapping("/register")
    public ResponseEntity<Object> guardar(@RequestBody UserDTO userDTO) throws Exception {
        
        return ResponseEntity.status(201).body(userService.guardar(userDTO));
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<User> buscarId(@PathVariable Long id) throws Exception{
        return ResponseEntity.ok(userService.buscarId(id));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/findByEmail/{email}")
    public ResponseEntity<UserDTOResponse> buscarEmail(@PathVariable String email) throws Exception{
        User user = userService.buscarEmail(email);
        if(user==null){
            throw new Exception("no encontrado");
        }

        // NO HAY QUE DEVOLVER NUNCA LA CONTRASEÑA! POR ESO PASO A DTO
        UserDTOResponse userRet =mapper.convertValue(user,UserDTOResponse.class);
        userRet.setRole(user.getRoleId());

        return ResponseEntity.ok(userRet);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> borrar(@PathVariable Long id) throws Exception {
        userService.borrar(id);
        return ResponseEntity.ok("Usuario borrado con exito");
    }

    @PutMapping("/update")
    @Operation(summary = "actualiza un usuarioDTO")
    public ResponseEntity<UserDTOResponse> actualizar(@RequestBody UserDTOResponse userDTOResponse) throws Exception {
        return ResponseEntity.ok(userService.actualizar(userDTOResponse));
    }
}
