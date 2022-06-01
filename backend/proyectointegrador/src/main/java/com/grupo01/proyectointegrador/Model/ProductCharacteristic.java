package com.grupo01.proyectointegrador.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table (name = "products_characteristics")
public class ProductCharacteristic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "prod_charact_id")
    private Long id;

    @Column(name = "prod_id", nullable = false)
    private Long prodId;

    @Column(name = "charact_id", nullable = false)
    private Long charactId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "prod_id", nullable = false)
    private Product product;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "charact_id", nullable = false)
    private Characteristic characteristic;

    public ProductCharacteristic(Long id, Long prodId, Long charactId) {
        this.id = id;
        this.prodId = prodId;
        this.charactId = charactId;
    }

    public Long getId() {
        return id;
    }

    public Long getProdId() {
        return prodId;
    }

    public void setProdId(Long prodId) {
        this.prodId = prodId;
    }

    public Long getCharactId() {
        return charactId;
    }

    public void setCharactId(Long charactId) {
        this.charactId = charactId;
    }
}
