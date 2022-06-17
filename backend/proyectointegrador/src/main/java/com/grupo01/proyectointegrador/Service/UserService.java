package com.grupo01.proyectointegrador.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo01.proyectointegrador.DTO.UserDTO;
import com.grupo01.proyectointegrador.DTO.UserDTOResponse;
import com.grupo01.proyectointegrador.Model.User;
import com.grupo01.proyectointegrador.Repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    IUserRepository userRepository;

    @Autowired
    ObjectMapper mapper;

    @Autowired
    PasswordEncoder passwordEncoder;

    // Insert
    /*public User guardarDTO(User user) throws Exception {
        UserDTO userDTO = null;
        UserDTO userDTOCheck = buscarPorIdDT0(userDTO.getId());

        User userEncontrado = user;

        if (userDTOCheck != null){

            userEncontrado = mapper.convertValue(userDTO,User.class);
            userEncontrado.setUserName(userDTO.getUserName());
            userEncontrado.setUserSurname(userDTO.getUserSurname());
            userEncontrado.setUserEmail(userDTO.getUserEmail());
            userEncontrado.setUserPassword(userDTO.getUserPassword());
            userEncontrado.setUserCity(userDTO.getUserCity());
        }
        return userEncontrado;
    }*/

    // Select for name
    public User buscarEmail(String email) throws  Exception{
        Optional<User> user = userRepository.findByUserEmail(email);

        return user.orElse(null);//si esta lo retorna si no manda null
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

    public User actualizar (User user) throws Exception {
        User userBuscado = buscarId(user.getId());

        if(userBuscado == null){
           throw new Exception("Usuario con id: "+ user.getId() + " no existe");
        }

        userRepository.save(user);
        return user;
    }

    public void guardar (UserDTO userDTO) throws Exception {
        User user = mapper.convertValue(userDTO,User.class);
        user.setRoleId(userDTO.getRole());
        user.setUserPassword(passwordEncoder.encode(userDTO.getUserPassword()));
        userRepository.save(user);
    }

    public UserDTOResponse validarUser(String email, String password)throws Exception{
        UserDTOResponse userReturn = null;
        User userByEmail = buscarEmail(email);

        if(userByEmail==null){
            throw new Exception("No se encuentra usuario con el email ingresado!");
        }

        if(!userByEmail.getUserPassword().equals(password)){
            throw new Exception("Contraseña incorrecta!");
        }

        userReturn =  mapper.convertValue(userByEmail, UserDTOResponse.class);

        return userReturn;
    }
}
