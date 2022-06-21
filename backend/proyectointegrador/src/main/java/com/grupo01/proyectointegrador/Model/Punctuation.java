package com.grupo01.proyectointegrador.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "punctuations")
public class Punctuation {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)

    @Column (name = "punct_id")
    private Long id;

    @Column(name = "punct_value")
    private Integer punctValue;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "prod_id", nullable = false)
    @JsonIgnore
    private Product prodId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User userId;

    public Punctuation(){}

    public Punctuation(Long id, Integer punctValue, Product prodId, User userId) {
        this.id = id;
        this.punctValue = punctValue;
        this.prodId = prodId;
        this.userId = userId;
    }

    public Punctuation(Integer punctValue, Product prodId, User userId) {
        this.punctValue = punctValue;
        this.prodId = prodId;
        this.userId = userId;
    }

    public Long getId() {
        return id;
    }

    public Integer getPunctValue() {
        return punctValue;
    }

    public void setPunctValue(Integer punctuation) {
        this.punctValue = punctuation;
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
