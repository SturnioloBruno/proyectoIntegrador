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

    @Column(name = "punctuation")
    private Integer punctuation;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "prod_id", nullable = false)
    @JsonIgnore
    private Product prodId;

    public Punctuation(Long id, Integer punctuation, Product prodId) {
        this.id = id;
        this.punctuation = punctuation;
        this.prodId = prodId;
    }

    public Punctuation(Integer punctuation, Product prodId) {
        this.punctuation = punctuation;
        this.prodId = prodId;
    }

    public Long getId() {
        return id;
    }

    public Integer getPunctuation() {
        return punctuation;
    }

    public void setPunctuation(Integer punctuation) {
        this.punctuation = punctuation;
    }

    public Product getProdId() {
        return prodId;
    }

    public void setProdId(Product prodId) {
        this.prodId = prodId;
    }
}
