package com.grupo01.proyectointegrador.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "favourites")
public class Favourite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fav_id", nullable = false)
    private Long id;

    @ManyToOne (fetch = FetchType.EAGER)
    @JoinColumn(name = "prod_id", nullable = false)
    @JsonIgnore
    private Product prodId;

    @ManyToOne (fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User userId;

    public Favourite() {}

    public Favourite(Long id, Product prodId, User userId) {
        this.id = id;
        this.prodId = prodId;
        this.userId = userId;
    }

    public Favourite(Product prodId, User userId) {
        this.prodId = prodId;
        this.userId = userId;
    }

    public Long getId() {
        return id;
    }

    public Product getProdId() {
        return prodId;
    }

    public void setProdId(Product prodId) {
        this.prodId = prodId;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }
}
