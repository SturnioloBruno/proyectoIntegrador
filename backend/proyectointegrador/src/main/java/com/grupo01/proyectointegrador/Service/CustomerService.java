package com.grupo01.proyectointegrador.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo01.proyectointegrador.DTO.CustomerDTO;
import com.grupo01.proyectointegrador.Exception.NotAcceptableException;
import com.grupo01.proyectointegrador.Model.Customer;
import com.grupo01.proyectointegrador.Repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    ICustomerRepository customerRepository;

    @Autowired
    ObjectMapper mapper;

    // Select All
    public List<Customer> listarTodos() throws Exception{
        return customerRepository.findAll();
    }

    // Select for name
    public Customer buscarEmail(String email) throws  Exception{
        Optional<Customer> customer = customerRepository.findByEmail(email);

        return customer.orElse(null);//si esta lo retorna si no manda null
    }

    // Select for id
    public Customer buscarId(Long id) throws  Exception{
        Optional<Customer> customer = customerRepository.findById(id);

        return customer.orElse(null);//si esta lo retorna si no manda null
    }

    // Insert
    public Customer guardar(Customer customer) throws  Exception{
        Customer customerCheck = null;

        customerCheck = buscarEmail(customer.getEmail());

        if(customerCheck!=null){
            throw new NotAcceptableException("Ya existe un usuario con el email ingresado");
        }

        return customerRepository.save(customer);
    }

    // Delete
    public void borrar(Long id)throws Exception{
        // verifico que existe
        Customer customer = buscarId(id);

        if(customer == null){
            throw new Exception("Cliente con id: "+ id + " no existe");
        }

        customerRepository.deleteById(id);
    }

    // Update
    public Customer actualizar(Customer customer) throws Exception{
        Customer customerBuscado = buscarId(customer.getId());

        if(customerBuscado==null){
            throw new Exception("Cliente con id: "+ customer.getId() + " no existe");
        }

        return customerRepository.save(customer);
    }

    public CustomerDTO validarCustomer(String email, String password)throws Exception{
        CustomerDTO customerReturn = null;
        Customer customerByEmail = buscarEmail(email);

        if(customerByEmail==null){
            throw new Exception("No se encuentra usuario con el email ingresado!");
        }

        if(!customerByEmail.getPassword().equals(password)){
            throw new Exception("Contraseña incorrecta!");
        }

        customerReturn =  mapper.convertValue(customerByEmail, CustomerDTO.class);

        return customerReturn;
    }
}
