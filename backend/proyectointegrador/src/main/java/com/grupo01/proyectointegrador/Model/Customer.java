package com.grupo01.proyectointegrador.Model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cus_id")
    private Long id;

    @Column(name = "cus_name", nullable = false)
    private String name;

    @Column(name = "cus_lastname",nullable = false)
    private String lastName;

    @Column(name = "cus_password",nullable = false)
    private String password;

    @Column(name = "cus_address",nullable = false)
    private String address;

    @Column(name = "cus_email",nullable = false)
    private String email;


    public Customer(Long id, String name, String lastName, String password, String address, String email) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.password = password;
        this.address = address;
        this.email = email;
    }

    public Customer(String name, String lastName, String password, String address, String email) {
        this.name = name;
        this.lastName = lastName;
        this.password = password;
        this.address = address;
        this.email = email;
    }

    public Customer(){}

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
