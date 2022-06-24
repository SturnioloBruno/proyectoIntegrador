package com.grupo01.proyectointegrador.Service;

import com.grupo01.proyectointegrador.Model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    @Autowired
    UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try {
            com.grupo01.proyectointegrador.Model.User user = userService.buscarEmail(username);
            Set<GrantedAuthority> grantList = new HashSet<GrantedAuthority>();

            if(user!=null){
                grantList.add(new SimpleGrantedAuthority(user.getRoleId().getRoleName()));
                return new User(user.getUserEmail(),  user.getUserPassword(), grantList);
            }

            throw  new UsernameNotFoundException("Error credenciales");

        } catch (Exception e) {
            return null;
        }
    }

}
