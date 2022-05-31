package com.grupo01.proyectointegrador.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="Productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "prod_name", nullable = false)
    private String nombre;

    @Column(name = "prod_punctuation")
    private int puntuacion;

    @Column(name = "prod_stars")
    private int estrellas;

    @Column(name = "prod_desc_title")
    private String descTitulo;

    @Column(name = "prod_desc")
    private String descripcion;

    @Column(name = "prod_coordinates")
    private int coordenadas;

    @ManyToOne
    @JoinColumn(name = "cat_id", nullable = false)
    private Categoria categoria;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "city_id", nullable = false)
    private City city;

    public Long getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getPuntuacion() {
        return puntuacion;
    }

    public void setPuntuacion(int puntuacion) {
        this.puntuacion = puntuacion;
    }

    public int getEstrellas() {
        return estrellas;
    }

    public void setEstrellas(int estrellas) {
        this.estrellas = estrellas;
    }

    public String getDescTitulo() {
        return descTitulo;
    }

    public void setDescTitulo(String descTitulo) {
        this.descTitulo = descTitulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getCoordenadas() {
        return coordenadas;
    }

    public void setCoordenadas(int coordenadas) {
        this.coordenadas = coordenadas;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}
