package com.grupo01.proyectointegrador.DTO;

public class CharacteristicDTO {
    private Long id;
    private String title;
    private String charactClass;

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
