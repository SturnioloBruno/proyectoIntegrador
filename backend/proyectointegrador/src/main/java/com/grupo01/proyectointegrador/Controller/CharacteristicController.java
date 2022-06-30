package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.Model.Characteristic;
import com.grupo01.proyectointegrador.Service.CharacteristicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class CharacteristicController {

    @Autowired
    CharacteristicService characteristicService;

    @PostMapping("/insert")
    public ResponseEntity<Characteristic> guardar(@RequestBody Characteristic characteristic) throws Exception {
        return ResponseEntity.ok(characteristicService.guardar(characteristic));
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Characteristic> buscarId(@PathVariable Long id) throws Exception{
        return ResponseEntity.ok(characteristicService.buscarId(id));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> borrar(@PathVariable Long id) throws Exception {
        characteristicService.borrar(id);
        return ResponseEntity.ok("Caracteristica borrada con exito");
    }

    @PutMapping("/update")
    public ResponseEntity<Characteristic> actualizar(@RequestBody Characteristic characteristic) throws Exception {
        return ResponseEntity.ok(characteristicService.guardar(characteristic));
    }

    @GetMapping("/getList")
    public ResponseEntity<List<Characteristic>> listar() throws Exception{
        return ResponseEntity.ok(characteristicService.listarTodos());
    }
}
