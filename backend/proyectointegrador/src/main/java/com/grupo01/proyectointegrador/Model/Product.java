package com.grupo01.proyectointegrador.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="products")
public class Product {
    @Id
    @Column(name = "prod_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "prod_name", nullable = false)
    private String name;

    @Column(name = "prod_punctuation")
    private int puntuation;

    @Column(name = "prod_stars")
    private int stars;

    @Column(name = "prod_desc_title")
    private String descTitle;

    @Column(name = "prod_desc")
    private String desc;

    @Column(name = "prod_coordinates")
    private int coordinates;

    @ManyToOne
    @JoinColumn(name = "cat_id", nullable = false)
    private Category category;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "city_id", nullable = false)
    private City city;

    @OneToMany(mappedBy = "product",fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Product> products;

    public Product(Long id, String name, int puntuation, int stars, String descTitle, String desc, int coordinates, Category category, City city) {
        this.id = id;
        this.name = name;
        this.puntuation = puntuation;
        this.stars = stars;
        this.descTitle = descTitle;
        this.desc = desc;
        this.coordinates = coordinates;
        this.category = category;
        this.city = city;
    }

    public Product(String name, int puntuation, int stars, String descTitle, String desc, int coordinates, Category category, City city) {
        this.name = name;
        this.puntuation = puntuation;
        this.stars = stars;
        this.descTitle = descTitle;
        this.desc = desc;
        this.coordinates = coordinates;
        this.category = category;
        this.city = city;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPuntuation() {
        return puntuation;
    }

    public void setPuntuation(int puntuation) {
        this.puntuation = puntuation;
    }

    public int getStars() {
        return stars;
    }

    public void setStars(int stars) {
        this.stars = stars;
    }

    public String getDescTitle() {
        return descTitle;
    }

    public void setDescTitle(String descTitle) {
        this.descTitle = descTitle;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public int getCoordinates() {
        return coordinates;
    }

    public void setCoordinates(int coordinates) {
        this.coordinates = coordinates;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }
}
