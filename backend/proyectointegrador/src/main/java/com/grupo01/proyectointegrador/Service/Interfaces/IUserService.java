package com.grupo01.proyectointegrador.Service.Interfaces;

import com.grupo01.proyectointegrador.DTO.UserDTO;
import com.grupo01.proyectointegrador.Model.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    void guardar(UserDTO userDTO) throws Exception;
    List<UserDTO> getUsers(Optional<Boolean> sort) throws Exception;
    UserDTO buscarPorIdDTO(Long id) throws Exception;
    void delete(Long id) throws Exception;
    UserDTO update(UserDTO userDTO) throws Exception;
}
