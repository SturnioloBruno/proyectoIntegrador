package com.grupo01.proyectointegrador.DTO;

import com.grupo01.proyectointegrador.Model.Booking;
import com.grupo01.proyectointegrador.Model.Image;
import com.grupo01.proyectointegrador.Model.ProductCharacteristic;
import com.grupo01.proyectointegrador.Model.ProductPolicy;

import java.util.List;
import java.util.Set;

public class ProductDTO {
    private Long id;
    private String address;
    private String name;
    private int punctuation;
    private Double stars;
    private String descTitle;
    private String desc;
    private Double x;
    private Double y;
    private String score;
    private CityDTO city;
    private CategoryDTO category;
    private List<Image> images;
    private List<ProductCharacteristic> characteristic;
    private List<ProductPolicy> policy;
    private List<Booking> bookings;

    public Long getId() {
        return id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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

    public Double getX() { return x; }

    public void setX(Double x) { this.x = x; }

    public Double getY() { return y; }

    public void setY(Double y) { this.y = y; }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }

    public CityDTO getCity() {
        return city;
    }

    public void setCity(CityDTO city) {
        this.city = city;
    }

    public CategoryDTO getCategory() {
        return category;
    }

    public void setCategory(CategoryDTO category) {
        this.category = category;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    public List<ProductCharacteristic> getCharacteristic() {
        return characteristic;
    }

    public void setCharacteristic(List<ProductCharacteristic> characteristic) {
        this.characteristic = characteristic;
    }

    public List<ProductPolicy> getPolicy() {
        return policy;
    }

    public void setPolicy(List<ProductPolicy> policy) {
        this.policy = policy;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}
