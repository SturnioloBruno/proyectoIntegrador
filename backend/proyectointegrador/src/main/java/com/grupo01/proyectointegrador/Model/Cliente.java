package com.grupo01.proyectointegrador.Model;

import javax.persistence.*;

@Entity
@Table(name = "Clientes")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cli_id")
    private Long id;

    @Column(name = "cli_nombre", nullable = false)
    private String nombre;

    @Column(name = "cli_apellido",nullable = false)
    private String apellido;

    @Column(name = "cli_password",nullable = false)
    private String password;

    @Column(name = "cli_direccion",nullable = false)
    private String direccion;

    @Column(name = "cli_email",nullable = false)
    private String email;

    public Cliente(Long id, String nombre, String apellido, String password, String direccion, String email) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.password = password;
        this.direccion = direccion;
        this.email = email;
    }

    public Cliente(){}

    public Long getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
