package com.grupo01.proyectointegrador.DTO;

import com.grupo01.proyectointegrador.Model.Image;
import com.grupo01.proyectointegrador.Model.ProductCharacteristic;

import java.util.List;
import java.util.Set;

public class ProductDTO {
    private Long id;
    private String adress;
    private String name;
    private int punctuation;
    private int stars;
    private String descTitle;
    private String desc;
    private int x;
    private int y;
    private String score;
    private CityDTO city;
    private CategoryDTO category;
    private Set<Image> listImages;
    private Set<ProductCharacteristic> listCharacteristic;

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

    public int getX() { return x; }

    public void setX(int x) { this.x = x; }

    public int getY() { return y; }

    public void setY(int y) { this.y = y; }

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

    public Set<Image> getListImages() {
        return listImages;
    }

    public void setListImages(Set<Image> listImages) {
        this.listImages = listImages;
    }

    public Set<ProductCharacteristic> getListCharacteristic() {
        return listCharacteristic;
    }

    public void setListCharacteristic(Set<ProductCharacteristic> listCharacteristic) {
        this.listCharacteristic = listCharacteristic;
    }
}
