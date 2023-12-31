package com.grupo01.proyectointegrador.Model;

import javax.persistence.*;

@Entity
@Table (name = "products_characteristics")
public class ProductCharacteristic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "prod_charact_id")
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "prod_id", nullable = false)
    private Product product;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "charact_id", nullable = false)
    private Characteristic characteristic;

    public ProductCharacteristic() {
    }

    public Long getId() {
        return id;
    }


}
