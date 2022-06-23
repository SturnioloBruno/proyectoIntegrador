package com.grupo01.proyectointegrador.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;


@Entity
@Table (name = "bookings")
public class Booking {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column (name = "booking_id", nullable = false)
    private Long id;

    @Column (name = "booking_start_time")
    private LocalTime bookingStartTime;

    @Column (name = "booking_start_date", nullable = false)
    private LocalDate bookingStartDate;

    @Column (name = "booking_finish_date", nullable = false)
    private LocalDate bookingFinishDate;

    @Column (name = "booking_vaccine_covid")
    private Boolean bookingVaccineCovid;

    @Column (name = "booking_userinfo_covid")
    private String bookingUserInfoCovid;

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "prod_id", nullable = false)
    @JsonIgnore
    private Product prodId;

    @ManyToOne (fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User userId;

    @Column (name = "booking_city")
    private String city;

    public Booking() {}

    public Booking(Long id, LocalTime bookingStartTime, LocalDate bookingStartDate, LocalDate bookingFinishDate, Boolean bookingVaccineCovid, String bookingUserInfoCovid, Product prodId, User userId, String city) {
        this.id = id;
        this.bookingStartTime = bookingStartTime;
        this.bookingStartDate = bookingStartDate;
        this.bookingFinishDate = bookingFinishDate;
        this.bookingVaccineCovid = bookingVaccineCovid;
        this.bookingUserInfoCovid = bookingUserInfoCovid;
        this.prodId = prodId;
        this.userId = userId;
        this.city = city;
    }

    public Booking(LocalTime bookingStartTime, LocalDate bookingStartDate, LocalDate bookingFinishDate, Boolean bookingVaccineCovid, String bookingUserInfoCovid, Product prodId, User userId, String city) {
        this.bookingStartTime = bookingStartTime;
        this.bookingStartDate = bookingStartDate;
        this.bookingFinishDate = bookingFinishDate;
        this.bookingVaccineCovid = bookingVaccineCovid;
        this.bookingUserInfoCovid = bookingUserInfoCovid;
        this.prodId = prodId;
        this.userId = userId;
        this.city = city;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalTime getBookingStartTime() {
        return bookingStartTime;
    }

    public void setBookingStartTime(LocalTime bookingStartTime) {
        this.bookingStartTime = bookingStartTime;
    }

    public LocalDate getBookingStartDate() {
        return bookingStartDate;
    }

    public void setBookingStartDate(LocalDate bookingStartDate) {
        this.bookingStartDate = bookingStartDate;
    }

    public LocalDate getBookingFinishDate() {
        return bookingFinishDate;
    }

    public void setBookingFinishDate(LocalDate bookingFinishDate) {
        this.bookingFinishDate = bookingFinishDate;
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

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
