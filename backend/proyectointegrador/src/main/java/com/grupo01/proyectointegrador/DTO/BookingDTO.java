package com.grupo01.proyectointegrador.DTO;

import com.grupo01.proyectointegrador.Model.Product;
import com.grupo01.proyectointegrador.Model.User;

public class BookingDTO {
    private Long id;
    private String bookingStarTime;
    private String bookingStartDate;
    private String bookingFinishDate;
    private Boolean bookingVaccineCovid;
    private String bookingUserInfoCovid;
    private Product prodId;
    private User userId;
    private String bookingCity;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBookingStarTime() {
        return bookingStarTime;
    }

    public void setBookingStarTime(String bookingStarTime) {
        this.bookingStarTime = bookingStarTime;
    }

    public String getBookingStartDate() {
        return bookingStartDate;
    }

    public void setBookingStartDate(String bookingStartDate) {
        this.bookingStartDate = bookingStartDate;
    }

    public String getBookingFinishDate() {
        return bookingFinishDate;
    }

    public void setBookingFinishDate(String bookingFinishDate) {
        this.bookingFinishDate = bookingFinishDate;
    }

    public Boolean getBookingVaccineCovid() {
        return bookingVaccineCovid;
    }

    public void setBookingVaccineCovid(Boolean bookingVaccineCovid) {
        this.bookingVaccineCovid = bookingVaccineCovid;
    }

    public String getBookingUserInfoCovid() {
        return bookingUserInfoCovid;
    }

    public void setBookingUserInfoCovid(String bookingUserInfoCovid) {
        this.bookingUserInfoCovid = bookingUserInfoCovid;
    }

    public Product getProdId() {
        return prodId;
    }

    public void setProdId(Product prodId) {
        this.prodId = prodId;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public String getBookingCity() {
        return bookingCity;
    }

    public void setBookingCity(String bookingCity) {
        this.bookingCity = bookingCity;
    }
}
