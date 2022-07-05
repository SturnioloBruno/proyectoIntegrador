package com.grupo01.proyectointegrador.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table (name = "users")
public class User  {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(name = "user_name", nullable = false)
    private String userName;

    @Column(name = "user_surname", nullable = false)
    private String userSurname;

    @Column(name = "user_email", nullable = false)
    private String userEmail;

    @Column(name = "user_password", nullable = false)
    private String userPassword;

    @Column(name = "user_city", nullable = false)
    private String userCity;

    @Column(name = "user_confirmation", nullable = false)
    private boolean confirmation;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id", nullable = false)
    private Role roleId;

    @OneToMany(mappedBy = "userId", fetch = FetchType.EAGER)
    private Set<Booking> bookings;

    @OneToMany(mappedBy = "userId", fetch = FetchType.EAGER)
    private Set<Punctuation> punctuations;

    @OneToMany(mappedBy = "userId", fetch = FetchType.EAGER)
    private List<Favourite> favourites;

    public User() {}

    public User(Long id, String userName, String userSurname, String userEmail, String userPassword, String userCity,boolean confirmation) {
        this.id = id;
        this.userName = userName;
        this.userSurname = userSurname;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userCity = userCity;
        this.confirmation = confirmation;
    }

    public User(String userName, String userSurname, String userEmail, String userPassword, String userCity,boolean confirmation) {
        this.userName = userName;
        this.userSurname = userSurname;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userCity = userCity;
        this.confirmation = confirmation;
    }

    public boolean isConfirmation() {
        return confirmation;
    }

    public void setConfirmation(boolean confirmation) {
        this.confirmation = confirmation;
    }

    public Long getId() {
        return id;
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

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String getUserCity() {
        return userCity;
    }

    public void setUserCity(String userCity) {
        this.userCity = userCity;
    }

    public Role getRoleId() {
        return roleId;
    }

    public void setRoleId(Role roleId) {
        this.roleId = roleId;
    }

    public Set<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(Set<Booking> bookings) {
        this.bookings = bookings;
    }

    public Set<Punctuation> getPunctuations() {
        return punctuations;
    }

    public void setPunctuations(Set<Punctuation> punctuations) {
        this.punctuations = punctuations;
    }
}
