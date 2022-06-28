package com.grupo01.proyectointegrador.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {
    @GetMapping("/aws")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Hola Mundo");
    }
}
