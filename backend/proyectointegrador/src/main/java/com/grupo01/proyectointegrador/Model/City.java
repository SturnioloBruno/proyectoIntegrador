package com.grupo01.proyectointegrador.Model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "cities")
public class City {

    @Id
    @Column(name = "city_id",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "city_name",nullable = false)
    private String cityName;

    @Column(name = "city_country",nullable = false)
    private String country;

    @OneToMany(mappedBy = "city", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Product> products;

    public City(Long id, String cityName, String country) {
        this.id = id;
        this.cityName = cityName;
        this.country = country;
    }

    public City(String cityName, String country) {
        this.cityName = cityName;
        this.country = country;
    }

    public  City(){}

    public Long getId() {
        return id;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}
