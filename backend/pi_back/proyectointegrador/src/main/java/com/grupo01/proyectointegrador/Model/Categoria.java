package com.grupo01.proyectointegrador.Model;

import javax.persistence.*;

@Entity
@Table(name="Categorias")
public class Categoria {

    @Id
    @SequenceGenerator(name = "categoria_sequence", sequenceName = "categoria_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator= "categoria_sequence")
    @Column(name="cat_id")
    private Long id;

    @Column(name="cat_titulo",nullable = false)
    private String titulo;

    @Column(name = "cat_descripcion",nullable = false)
    private String descripcion;

    @Column(name = "cat_url_imagen",nullable = false)
    private String url_imagen;

    public Categoria(Long id, String titulo, String descripcion, String url_imagen) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url_imagen = url_imagen;
    }

    public Categoria(){}

    public Long getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUrl_imagen() {
        return url_imagen;
    }

    public void setUrl_imagen(String url_imagen) {
        this.url_imagen = url_imagen;
    }
}
