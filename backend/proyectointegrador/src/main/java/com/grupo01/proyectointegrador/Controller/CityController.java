package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.Model.City;
import com.grupo01.proyectointegrador.Service.CityService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cities")
public class CityController {

    @Autowired
    CityService cityService;


    @Operation(summary = "Listar todas las ciudades")
    @GetMapping("/getList")
    public ResponseEntity<List<City>> listar()throws Exception{
        return ResponseEntity.ok(cityService.getListAll());
    }
}
