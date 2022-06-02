package com.grupo01.proyectointegrador.Model;

import javax.persistence.*;

@Entity
@Table(name = "products_policies")
public class ProductPolicy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "prod_policies_id")
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "prod_id", nullable = false)
    private Product product;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "policies_id", nullable = false)
    private Policy policy;

    public ProductPolicy() {
    }

    public Long getId() {
        return id;
    }


}
