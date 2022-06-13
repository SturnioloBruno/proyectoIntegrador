package com.grupo01.proyectointegrador.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;

@Entity
@Table (name = "bookings")
public class Booking {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column (name = "booking_id", nullable = false)
    private Long id;

    @Column (name = "booking_start_time")
    private Time bookingStartTime;

    @Column (name = "booking_start_date", nullable = false)
    private Date bookingStartDate;

    @Column (name = "booking_finish_date", nullable = false)
    private Date bookingFinishDate;

    @ManyToOne (fetch = FetchType.EAGER)
    @JoinColumn(name = "prod_id", nullable = false)
    @JsonIgnore
    private Product prodId;

    @ManyToOne (fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User userId;

    public Booking(Long id, Time bookingStartTime, Date bookingStartDate, Date bookingFinishDate) {
        this.id = id;
        this.bookingStartTime = bookingStartTime;
        this.bookingStartDate = bookingStartDate;
        this.bookingFinishDate = bookingFinishDate;
    }

    public Booking(Time bookingStartTime, Date bookingStartDate, Date bookingFinishDate) {
        this.bookingStartTime = bookingStartTime;
        this.bookingStartDate = bookingStartDate;
        this.bookingFinishDate = bookingFinishDate;
    }

    public Long getId() {
        return id;
    }

    public Time getBookingStartTime() {
        return bookingStartTime;
    }

    public void setBookingStartTime(Time bookingStartTime) {
        this.bookingStartTime = bookingStartTime;
    }

    public Date getBookingStartDate() {
        return bookingStartDate;
    }

    public void setBookingStartDate(Date bookingStartDate) {
        this.bookingStartDate = bookingStartDate;
    }

    public Date getBookingFinishDate() {
        return bookingFinishDate;
    }

    public void setBookingFinishDate(Date bookingFinishDate) {
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
