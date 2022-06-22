package com.grupo01.proyectointegrador.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
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
    private Integer punctuation;

    @Column(name = "prod_stars")
    private Double stars;

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

    @OneToMany(mappedBy = "product",fetch = FetchType.LAZY)
    @JsonIgnore
    private List<ProductCharacteristic> productsC;

    @OneToMany(mappedBy = "product",fetch = FetchType.LAZY)
    @JsonIgnore
    private List<ProductPolicy> productsP;

    @OneToMany(mappedBy = "proId",fetch = FetchType.LAZY)
    private List<Image> images;

    @OneToMany(mappedBy = "prodId", fetch = FetchType.LAZY)
    private List<Punctuation> punctProd;

    @OneToMany(mappedBy = "prodId", fetch = FetchType.LAZY)
    private List<Booking> bookings;

    public Product() {
    }

    public Product(Long id, String address, String name, Integer punctuation, Double stars, String descTitle, String desc, Double x, Double y, String score, Category category, City city, List<ProductCharacteristic> productsC, List<ProductPolicy> productsP, List<Image> images, List<Punctuation> punctProd, List<Booking> bookings) {
        this.id = id;
        this.address = address;
        this.name = name;
        this.punctuation = punctuation;
        this.stars = stars;
        this.descTitle = descTitle;
        this.desc = desc;
        this.x = x;
        this.y = y;
        this.score = score;
        this.category = category;
        this.city = city;
        this.productsC = productsC;
        this.productsP = productsP;
        this.images = images;
        this.punctProd = punctProd;
        this.bookings = bookings;
    }

    public Product(String address, String name, Integer punctuation, Double stars, String descTitle, String desc, Double x, Double y, String score, Category category, City city, List<ProductCharacteristic> productsC, List<ProductPolicy> productsP, List<Image> images, List<Punctuation> punctProd, List<Booking> bookings) {
        this.address = address;
        this.name = name;
        this.punctuation = punctuation;
        this.stars = stars;
        this.descTitle = descTitle;
        this.desc = desc;
        this.x = x;
        this.y = y;
        this.score = score;
        this.category = category;
        this.city = city;
        this.productsC = productsC;
        this.productsP = productsP;
        this.images = images;
        this.punctProd = punctProd;
        this.bookings = bookings;
    }

    public Long getId() {
        return id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String adress) {
        this.address = adress;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPunctuation() {
        return punctuation;
    }

    public void setPunctuation(Integer punctuation) {
        this.punctuation = punctuation;
    }

    public Double getStars() {
        return stars;
    }

    public void setStars(Double stars) {
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

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    public List<ProductCharacteristic> getProductsC() {
        return productsC;
    }

    public void setProductsC(List<ProductCharacteristic> productsC) {
        this.productsC = productsC;
    }

    public List<ProductPolicy> getProductsP() {
        return productsP;
    }

    public void setProductsP(List<ProductPolicy> productsP) {
        this.productsP = productsP;
    }

    public List<Punctuation> getPunctProd() {
        return punctProd;
    }

    public void setPunctProd(List<Punctuation> punctProd) {
        this.punctProd = punctProd;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}
