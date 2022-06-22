package com.grupo01.proyectointegrador.DTO;

import com.grupo01.proyectointegrador.Model.Role;

public class UserDTOResponse {
    private Long id;
    private String userName;
    private String userSurname;
    private String userEmail;
    private String userCity;
    private Role role;

    public UserDTOResponse(){}

    public UserDTOResponse(Long id, String userName, String userSurname, String userEmail, String userCity, Role role) {
        this.id = id;
        this.userName = userName;
        this.userSurname = userSurname;
        this.userEmail = userEmail;
        this.userCity = userCity;
        this.role = role;
    }

    public UserDTOResponse(String userName, String userSurname, String userEmail, String userCity, Role role) {
        this.userName = userName;
        this.userSurname = userSurname;
        this.userEmail = userEmail;
        this.userCity = userCity;
        this.role = role;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserSurname() {
        return userSurname;
    }

    public void setUserSurname(String userSurname) {
        this.userSurname = userSurname;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserCity() {
        return userCity;
    }

    public void setUserCity(String userCity) {
        this.userCity = userCity;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
