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
    @JoinColumn(name = "cus_id", nullable = false)
    @JsonIgnore
    private Customer customerId;

    public Punctuation(){}

    public Punctuation(Long id, Integer punctValue, Product prodId) {
        this.id = id;
        this.punctValue = punctValue;
        this.prodId = prodId;
    }

    public Punctuation(Integer punctValue, Product prodId) {
        this.punctValue = punctValue;
        this.prodId = prodId;
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

    public Customer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Customer customerId) {
        this.customerId = customerId;
    }
}
