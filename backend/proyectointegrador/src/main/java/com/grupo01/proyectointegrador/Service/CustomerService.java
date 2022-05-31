package com.grupo01.proyectointegrador.Service;

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

    public Boolean validarCustomer(String email,String password)throws Exception{
        Customer customerBuscado = buscarEmail(email);

        if(customerBuscado==null){
            throw new Exception("No se encuentra usuario con el email ingresado!");
        }

        if(!customerBuscado.getPassword().equals(password)){
            throw new Exception("Contraseña incorrecta!");
        }

        return true;
    }
}
