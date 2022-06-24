package com.grupo01.proyectointegrador.Service;

import com.grupo01.proyectointegrador.Model.Role;
import com.grupo01.proyectointegrador.Repository.IRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService{

    @Autowired
    IRoleRepository roleRepository;

    public Role guardar(Role role) throws Exception {
        return roleRepository.save(role);
    }

    public Role buscarId(Long id) throws Exception {
        Optional<Role> role = roleRepository.findById(id);
        return role.orElse(null);
    }

    public void borrar (Long id) throws Exception {
        Role role = buscarId(id);
        if(role != null) {
            roleRepository.deleteById(id);
        }
        else{
            throw new Exception("Rol con id: "+ id + " no existe");
        }
    }

    public Role actualizar (Role role) throws Exception {
        Role role1 = buscarId(role.getId());
        if (role1 != null){
            return roleRepository.save(role);
        }
        else{
            throw new Exception("Rol con id: "+ role.getId() + " no existe");
        }
    }
}
