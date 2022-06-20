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

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "prod_id", nullable = false)
    @JsonIgnore
    private Product prodId;

    @ManyToOne (fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User userId;

    public Booking() {}

    public Booking(Long id, LocalTime bookingStartTime, LocalDate bookingStartDate, LocalDate bookingFinishDate, Product prodId, User userId) {
        this.id = id;
        this.bookingStartTime = bookingStartTime;
        this.bookingStartDate = bookingStartDate;
        this.bookingFinishDate = bookingFinishDate;
        this.prodId = prodId;
        this.userId = userId;
    }

    public Booking(LocalTime bookingStartTime, LocalDate bookingStartDate, LocalDate bookingFinishDate, Product prodId, User userId) {
        this.bookingStartTime = bookingStartTime;
        this.bookingStartDate = bookingStartDate;
        this.bookingFinishDate = bookingFinishDate;
        this.prodId = prodId;
        this.userId = userId;
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
}
