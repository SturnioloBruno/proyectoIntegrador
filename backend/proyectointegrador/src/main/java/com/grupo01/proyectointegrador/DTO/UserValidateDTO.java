package com.grupo01.proyectointegrador.DTO;

public class UserValidateDTO {

    private String userEmail;
    private String userPassword;

    public UserValidateDTO() {
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }
}
