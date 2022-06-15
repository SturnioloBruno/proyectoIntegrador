package com.grupo01.proyectointegrador.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo01.proyectointegrador.DTO.UserDTO;
import com.grupo01.proyectointegrador.Model.User;
import com.grupo01.proyectointegrador.Repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    IUserRepository userRepository;

    @Autowired
    ObjectMapper mapper;


    public User crearUser(User user) throws Exception {
        return userRepository.save(user);
    }


    public UserDTO buscarPorIdDT0(Long id) throws Exception{
        Optional<User> user = userRepository.findById(id);
        UserDTO userEncontrado = null;
        if (user.isPresent()){
            userEncontrado = mapper.convertValue(user.get(),UserDTO.class);
            userEncontrado.setUserName(user.get().getUserName());
            userEncontrado.setUserSurname(user.get().getUserSurname());
            userEncontrado.setUserEmail(user.get().getUserEmail());
            userEncontrado.setUserPassword(user.get().getUserPassword());
            userEncontrado.setUserCity(user.get().getUserCity());
        }
            return userEncontrado;
    }

    public User buscarId(Long id) throws Exception {
        Optional<User> user = userRepository.findById(id);

        return user.orElse(null);
    }

    public void borrar (Long id) throws Exception {

        UserDTO user = buscarPorIdDT0(id);

        if(user != null) {

            userRepository.deleteById(id);
        }
        else{
            throw new Exception("Usuario con id: "+ id + " no existe");
        }
    }

    public UserDTO actualizar (UserDTO userDTO) throws Exception {
        UserDTO userBuscado = buscarPorIdDT0(userDTO.getId());

        if(userBuscado == null){
           throw new Exception("Usuario con id: "+ userDTO.getId() + " no existe");
        }
        User user=mapper.convertValue(userDTO,User.class);
        userRepository.save(user);
        return userDTO;
    }
}
