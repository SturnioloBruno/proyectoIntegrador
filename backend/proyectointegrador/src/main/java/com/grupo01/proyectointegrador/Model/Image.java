package com.grupo01.proyectointegrador.Model;

import javax.persistence.*;

@Entity
@Table (name= "images")
public class Image {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "img_id")
    private Long id;

    @Column(name = "img_url", nullable = false)
    private String nombreUrl;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "prod_id", nullable = false)
    private Product proId;

    public Image(Long id, String nombreUrl, Product proId) {
        this.id = id;
        this.nombreUrl = nombreUrl;
        this.proId = proId;
    }

    public Image(String nombreUrl, Product proId) {
        this.nombreUrl = nombreUrl;
        this.proId = proId;
    }

    public Image() {
    }

    public Long getId() {
        return id;
    }

    public String getNombre_url() {
        return nombreUrl;
    }

    public void setNombre_url(String nombre_url) {
        this.nombreUrl = nombre_url;
    }

    public Product getProId() {
        return proId;
    }
}
