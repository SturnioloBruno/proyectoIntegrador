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
    private String adress;

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
    private String x;

    @Column(name = "prod_y")
    private String y;

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

    public Product() {
    }

    public Product(Long id, String adress, String name, int punctuation, int stars, String descTitle, String desc, String x, String y, String score) {
        this.id = id;
        this.adress = adress;
        this.name = name;
        this.punctuation = punctuation;
        this.stars = stars;
        this.descTitle = descTitle;
        this.desc = desc;
        this.x = x;
        this.y = y;
        this.score = score;
    }

    public Product(String adress, String name, int punctuation, int stars, String descTitle, String desc, String x, String y, String score) {
        this.adress = adress;
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
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
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

    public String getX() {
        return x;
    }

    public void setX(String x) {
        this.x = x;
    }

    public String getY() {
        return y;
    }

    public void setY(String y) {
        this.y = y;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }
}
