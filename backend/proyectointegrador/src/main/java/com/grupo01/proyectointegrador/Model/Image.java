package com.grupo01.proyectointegrador.Model;

import javax.persistence.*;

@Entity
@Table (name= "Imagenes")
public class Image {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "img_id")

    private Long id;
    @Column(name = "img_url", nullable = false)
    private String nombreUrl;

    @Column(name = "pro_id", nullable = false)
    private long proId;

    public Image(Long id, String nombre_url, long pro_id) {
        this.id = id;
        this.nombreUrl = nombre_url;
        this.proId = pro_id;
    }

    public Image(String nombre_url, long pro_id) {
        this.nombreUrl = nombre_url;
        this.proId = pro_id;
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

    public long getProId() {
        return proId;
    }
}
