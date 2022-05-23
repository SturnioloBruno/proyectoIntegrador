package com.grupo01.proyectointegrador.Service;

import com.grupo01.proyectointegrador.Model.Cliente;
import com.grupo01.proyectointegrador.Repository.IClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    IClienteRepository clienteRepository;

    // Select All
    public List<Cliente> listarTodos() throws Exception{
        return clienteRepository.findAll();
    }

    // Select for name
    public Cliente buscarEmail(String email) throws  Exception{
        Optional<Cliente> cliente = clienteRepository.findByEmail(email);

        return cliente.orElse(null);//si esta lo retorna si no manda null
    }

    // Select for id
    public Cliente buscarId(Long id) throws  Exception{
        Optional<Cliente> cliente = clienteRepository.findById(id);

        return cliente.orElse(null);//si esta lo retorna si no manda null
    }

    // Insert
    public Cliente guardar(Cliente cliente) throws  Exception{
        return clienteRepository.save(cliente);
    }

    // Delete
    public void borrar(Long id)throws Exception{
        // verifico que existe
        Cliente cliente = buscarId(id);

        if(cliente == null){
            throw new Exception("Cliente con id: "+ id + "no existe");
        }

        clienteRepository.deleteById(id);
    }

    // Update
    public Cliente actualizar(Cliente cliente) throws Exception{
        Cliente clienteBuscado = buscarId(cliente.getId());

        if(clienteBuscado==null){
            throw new Exception("Cliente con id: "+ cliente.getId() + "no existe");
        }

        return clienteRepository.save(cliente);
    }

    public Boolean validarCliente(String email,String password)throws Exception{
        Cliente clienteBuscado = buscarEmail(email);

        if(clienteBuscado==null){
            throw new Exception("No se encuentra usuario con el email ingresado!");
        }

        if(!clienteBuscado.getPassword().equals(password)){
            throw new Exception("Contraseña incorrecta!");
        }

        return true;
    }
}
