package com.grupo01.proyectointegrador.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="cat_id")
    private Long id;

    @Column(name="cat_title",nullable = false)
    private String title;

    @Column(name = "cat_desc",nullable = false)
    private String desc;

    @Column(name = "cat_url_img",nullable = false)
    private String urlImagen;

    @OneToMany(mappedBy = "categories")
    @JsonIgnore
    private Set<Producto> productos;


    public Category(Long id, String title, String desc, String urlImagen) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.urlImagen = urlImagen;
    }

    public Category( String title, String des, String urlImagen) {
        this.title = title;
        this.desc = desc;
        this.urlImagen = urlImagen;
    }

    public Category(){}

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getUrlImagen() {
        return urlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }

    public Set<Producto> getProductos() {
        return productos;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }
}
