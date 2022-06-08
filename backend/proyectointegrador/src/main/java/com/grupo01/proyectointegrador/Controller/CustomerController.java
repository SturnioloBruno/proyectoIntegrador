package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.DTO.CustomerDTO;
import com.grupo01.proyectointegrador.DTO.CustomerValidateDTO;
import com.grupo01.proyectointegrador.Model.Customer;
import com.grupo01.proyectointegrador.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @GetMapping("/getList")
    public ResponseEntity<List<Customer>> listar()throws Exception{
        return ResponseEntity.ok(customerService.listarTodos());
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Customer> buscarId(@PathVariable Long id)throws Exception{
        return ResponseEntity.ok(customerService.buscarId(id));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/findByEmail/{email}")
    public ResponseEntity<Customer> buscarEmail(@PathVariable String email)throws Exception{
        return ResponseEntity.ok(customerService.buscarEmail(email));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> borrar(@PathVariable Long id) throws Exception{
        customerService.borrar(id);
        return ResponseEntity.ok("Categoria borrada con exito!");
    }

    @PutMapping("/update")
    public ResponseEntity<Customer> actualizar(@RequestBody Customer customer)throws Exception{
        return ResponseEntity.ok(customerService.actualizar(customer));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public ResponseEntity<Customer> guardar(@RequestBody Customer customer)throws Exception{
        return ResponseEntity.ok(customerService.guardar(customer));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/validate")
    public ResponseEntity<CustomerDTO> validarCustomer(@RequestBody CustomerValidateDTO customerValidate)throws Exception{
        CustomerDTO customer = customerService.validarCustomer(customerValidate.getEmail(),customerValidate.getPassword());
        if(customer==null){
            ResponseEntity.badRequest();
        }
        return ResponseEntity.ok(customer);
    }
}
