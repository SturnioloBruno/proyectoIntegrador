package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.Model.Image;
import com.grupo01.proyectointegrador.Service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/images")
public class ImageController {
    @Autowired
    ImageService imageService;

    @GetMapping("/getList")
    public ResponseEntity<List<Image>> listar()throws Exception{
        return ResponseEntity.ok(imageService.listAll());
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity <List<String>> findProId(@PathVariable Long id)throws Exception{
        return ResponseEntity.ok(imageService.findByProId(id));
    }

    @PutMapping("/update")
    public ResponseEntity<Image> actualizar(@RequestBody Image image)throws Exception{
        return ResponseEntity.ok(imageService.actualizar(image));
    }


    @PostMapping("/insert")
    public ResponseEntity<Image> save(@RequestBody Image image)throws Exception{
        return ResponseEntity.ok(imageService.guardar(image));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws Exception{
        imageService.borrar(id);
        return ResponseEntity.ok("Imagen borrada con exito!");
    }
}
