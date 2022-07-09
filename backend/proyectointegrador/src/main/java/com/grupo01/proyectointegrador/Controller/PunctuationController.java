package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.Model.Punctuation;
import com.grupo01.proyectointegrador.Service.PunctuationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/punctuations")
public class PunctuationController {

   @Autowired
   PunctuationService punctuationService;


   @GetMapping("/findById/{id}")
   public ResponseEntity<Punctuation> buscarId(@PathVariable Long id) throws Exception {
      return ResponseEntity.ok(punctuationService.buscarId(id));
   }

   @PostMapping("/insert")
   public ResponseEntity<Punctuation> guardar(@RequestBody Punctuation punctuation) throws Exception {
      return ResponseEntity.ok(punctuationService.guardar(punctuation));
   }

   @DeleteMapping("/delete/{id}")
   public ResponseEntity<String> borrar(@PathVariable Long id) throws Exception {
      punctuationService.borrar(id);
      return ResponseEntity.ok("Puntuación borrada con exito");
   }

   @PutMapping("/update")
      public ResponseEntity<Punctuation> actualizar(@RequestBody Punctuation punctuation) throws Exception {
      return ResponseEntity.ok(punctuationService.actualizar(punctuation));
   }


   @GetMapping("/total/{id}")
   public ResponseEntity<Long> totalPuntuaciones(@PathVariable Long id) throws Exception {
      return ResponseEntity.ok(punctuationService.totalPunctuation(id));
   }
}
