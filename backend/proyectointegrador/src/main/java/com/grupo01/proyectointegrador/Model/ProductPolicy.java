package com.grupo01.proyectointegrador.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "poducts_policies")
public class ProductPolicy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "prod_policies_id")
    private Long id;

    @Column(name = "prod_id")
    private Long prodId;

    @Column(name = "policies_id")
    private Long policiesId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "prod_id", nullable = false)
    private Product product;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "policies_id", nullable = false)
    private Policy policy;

    public ProductPolicy(Long id, Long prodId, Long policiesId) {
        this.id = id;
        this.prodId = prodId;
        this.policiesId = policiesId;
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

    public Long getPoliciesId() {
        return policiesId;
    }

    public void setPoliciesId(Long policiesId) {
        this.policiesId = policiesId;
    }
}
