package com.grupo01.proyectointegrador.Service.Interfaces;

import com.grupo01.proyectointegrador.Model.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    void guardar(User userDTO) throws Exception;
    List<User> getUsers(Optional<Boolean> sort) throws Exception;
    User buscarPorIdDTO(Long id) throws Exception;
    void delete(Long id) throws Exception;
    User update(User userDTO) throws Exception;
}
