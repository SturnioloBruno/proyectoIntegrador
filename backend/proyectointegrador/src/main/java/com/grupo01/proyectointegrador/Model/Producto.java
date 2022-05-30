package com.grupo01.proyectointegrador.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="Productos")
public class Producto {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "prod_nombre", nullable = false)
    private String nombre;

    @Column(name = "prod_puntuacion")
    private int puntuacion;

    @Column(name = "prod_estrellas")
    private int estrellas;

    @Column(name = "prod_desc_titulo")
    private String descTitulo;

    @Column(name = "prod_descripcion")
    private String descripcion;

    @Column(name = "prod_coordenadas")
    private int coordenadas;

    @ManyToOne
    @JsonIgnore
    private Categoria categoria;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public int getPuntuacionDelProducto() {
        return puntuacionDelProducto;
    }

    public void setPuntuacionDelProducto(int puntuacionDelProducto) {
        this.puntuacionDelProducto = puntuacionDelProducto;
    }

    public int getEstrellasDelProducto() {
        return estrellasDelProducto;
    }

    public void setEstrellasDelProducto(int estrellasDelProducto) {
        this.estrellasDelProducto = estrellasDelProducto;
    }

    public String getDescTituloProducto() {
        return descTituloProducto;
    }

    public void setDescTituloProducto(String descTituloProducto) {
        this.descTituloProducto = descTituloProducto;
    }

    public String getDescripcionProducto() {
        return descripcionProducto;
    }

    public void setDescripcionProducto(String descripcionProducto) {
        this.descripcionProducto = descripcionProducto;
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
