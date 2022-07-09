package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.Model.Policy;
import com.grupo01.proyectointegrador.Service.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/policies")
public class PolicyController {

    @Autowired
    PolicyService policyService;

    @PostMapping("/insert")
    public ResponseEntity<Policy> guardar(@RequestBody Policy policy) throws Exception {
        return ResponseEntity.ok(policyService.guardar(policy));
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Policy> buscarId(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(policyService.buscarId(id));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> borrar(@PathVariable Long id) throws Exception {
        policyService.borrar(id);
        return ResponseEntity.ok("Politica borrada con exito");
    }

    @PutMapping("/update")
    public ResponseEntity<Policy> actualizar(@RequestBody Policy policy) throws Exception {
        return ResponseEntity.ok(policyService.actualizar(policy));
    }

}
