package com.grupo01.proyectointegrador.Service;

import com.grupo01.proyectointegrador.Model.User;
import com.grupo01.proyectointegrador.Repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    IUserRepository userRepository;

    public User guardar(User user) throws Exception {
        return userRepository.save(user);
    }

    public User buscarId(Long id) throws Exception {
        Optional<User> user = userRepository.findById(id);
        return user.orElse(null);
    }

    public void borrar (Long id) throws Exception {
        User user = buscarId(id);
        if(user != null) {
            userRepository.deleteById(id);
        }
        else{
            throw new Exception("Usuario con id: "+ id + " no existe");
        }
    }

    public User actualizar (User user) throws Exception {
        User user1 = buscarId(user.getId());
        if (user1 != null){
            return userRepository.save(user);
        }
        else{
            throw new Exception("Usuario con id: "+ user.getId() + " no existe");
        }
    }
}
