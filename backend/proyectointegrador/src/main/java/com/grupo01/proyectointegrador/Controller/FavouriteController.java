package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.Model.Favourite;
import com.grupo01.proyectointegrador.Service.FavouriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/favourites")
public class FavouriteController {

    @Autowired
    FavouriteService favouriteService;

    @PostMapping("/insert")
    public ResponseEntity<Favourite> guardar(@RequestBody Favourite favourite) throws Exception {
        return ResponseEntity.ok(favouriteService.guardar(favourite));
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Favourite> buscarId(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(favouriteService.buscarId(id));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> borrar(@PathVariable Long id) throws Exception {
        favouriteService.borrar(id);
        return ResponseEntity.ok("Favorito borrado con exito");
    }
}
