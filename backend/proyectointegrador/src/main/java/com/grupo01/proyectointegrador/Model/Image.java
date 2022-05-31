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
    private String nombre_url;
    @Column(name = "pro_id", nullable = false)
    private long pro_id;

    public Image(Long id, String nombre_url, long pro_id) {
        this.id = id;
        this.nombre_url = nombre_url;
        this.pro_id = pro_id;
    }

    public Image(String nombre_url, long pro_id) {
        this.nombre_url = nombre_url;
        this.pro_id = pro_id;
    }

    public Image() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre_url() {
        return nombre_url;
    }

    public void setNombre_url(String nombre_url) {
        this.nombre_url = nombre_url;
    }

    public long getPro_id() {
        return pro_id;
    }

}
