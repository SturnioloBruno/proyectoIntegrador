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

    @Column(name = "prod_address", nullable = false)
    private String address;

    @Column(name = "prod_name", nullable = false)
    private String name;

    @Column(name = "prod_punctuation")
    private int punctuation;

    @Column(name = "prod_stars")
    private int stars;

    @Column(name = "prod_desc_title")
    private String descTitle;

    @Column(name = "prod_desc")
    private String desc;

    @Column(name = "prod_x")
    private Double x;

    @Column(name = "prod_y")
    private Double y;

    @Column(name = "prod_score")
    private String score;

    @ManyToOne
    @JoinColumn(name = "cat_id", nullable = false)
    private Category category;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "city_id", nullable = false)
    private City city;

    @OneToMany(mappedBy = "product",fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<ProductCharacteristic> productsC;

    @OneToMany(mappedBy = "policy",fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<ProductPolicy> productsP;

    @OneToMany(mappedBy = "proId",fetch = FetchType.EAGER)
    private Set<Image> images;

    public Product() {
    }

    public Product(Long id, String adress, String name, int punctuation, int stars, String descTitle, String desc, Double x, Double y, String score) {
        this.id = id;
        this.address = adress;
        this.name = name;
        this.punctuation = punctuation;
        this.stars = stars;
        this.descTitle = descTitle;
        this.desc = desc;
        this.x = x;
        this.y = y;
        this.score = score;
    }

    public Product(String adress, String name, int punctuation, int stars, String descTitle, String desc, Double x, Double y, String score) {
        this.address = adress;
        this.name = name;
        this.punctuation = punctuation;
        this.stars = stars;
        this.descTitle = descTitle;
        this.desc = desc;
        this.x = x;
        this.y = y;
        this.score = score;
    }

    public Long getId() {
        return id;
    }

    public String getAdress() {
        return address;
    }

    public void setAdress(String adress) {
        this.address = adress;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPunctuation() {
        return punctuation;
    }

    public void setPunctuation(int punctuation) {
        this.punctuation = punctuation;
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

    public Double getX() {
        return x;
    }

    public void setX(Double x) {
        this.x = x;
    }

    public Double getY() {
        return y;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Set<Image> getImages() {
        return images;
    }

    public void setImages(Set<Image> images) {
        this.images = images;
    }

    public Set<ProductCharacteristic> getProductsC() {
        return productsC;
    }

    public void setProductsC(Set<ProductCharacteristic> productsC) {
        this.productsC = productsC;
    }

    public Set<ProductPolicy> getProductsP() {
        return productsP;
    }

    public void setProductsP(Set<ProductPolicy> productsP) {
        this.productsP = productsP;
    }
}
