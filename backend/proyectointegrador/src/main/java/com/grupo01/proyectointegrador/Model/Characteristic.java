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

    @Column(name = "charact_class", nullable = false)
    private String charactClass;

    @OneToMany(mappedBy = "characteristic",fetch = FetchType.EAGER)
    private Set<ProductCharacteristic> characteristics;

    public Characteristic() {
    }

    public Characteristic(Long id, String title, String charactClass) {
        this.id = id;
        this.title = title;
        this.charactClass = charactClass;
    }

    public Characteristic(String title, String charactClass) {
        this.title = title;
        this.charactClass = charactClass;
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

    public String getCharactClass() {
        return charactClass;
    }

    public void setCharactClass(String charactClass) {
        this.charactClass = charactClass;
    }
}
