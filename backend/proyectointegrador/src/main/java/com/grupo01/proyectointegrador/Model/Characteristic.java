package com.grupo01.proyectointegrador.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="characteristics")
public class Characteristic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="charact_id")
    private Long id;

    @Column(name="charact_title", nullable = false)
    private String title;

    @OneToMany(mappedBy = "characteristic",fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<ProductCharacteristic> characteristics;

    public Characteristic() {
    }

    public Characteristic(Long id, String title) {
        this.id = id;
        this.title = title;
    }

    public Characteristic(String title) {
        this.title = title;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
