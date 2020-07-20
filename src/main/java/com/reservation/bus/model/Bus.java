package com.reservation.bus.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Time;

@Entity
@Table(name = "bus")
public class Bus {
    @Column(name = "id")
    @Id
    Integer id;

    @Column(name = "operator_name")
    String operatorName;

    @Column(name = "departure_loc")
    String departureLoc;

    @Column(name = "arrival_loc")
    String arrivalLoc;

    @Column(name = "departure_time")
    Time departureTime;

    public Bus(Integer id, String operatorName, String departureLoc, String arrivalLoc, Time departureTime, Time arrivalTime, String busType, int duration, int price) {
        this.id = id;
        this.operatorName = operatorName;
        this.departureLoc = departureLoc;
        this.arrivalLoc = arrivalLoc;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.busType = busType;
        this.duration = duration;
        this.price = price;
    }

    public Bus(){

    }
    @Column(name = "arrival_time")
    Time arrivalTime;

    @Column(name = "bus_type")
    String busType;

    int duration;

    @Column(name = "price")
    int price;

    public String getOperatorName() {
        return operatorName;
    }

    public void setOperatorName(String operatorName) {
        this.operatorName = operatorName;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Integer getId() {
        return id;
    }

    public String getDepartureLoc() {
        return departureLoc;
    }

    public void setDepartureLoc(String departureLoc) {
        this.departureLoc = departureLoc;
    }

    public String getArrivalLoc() {
        return arrivalLoc;
    }

    public void setArrivalLoc(String arrivalLoc) {
        this.arrivalLoc = arrivalLoc;
    }

    public Time getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(Time departureTime) {
        this.departureTime = departureTime;
    }

    public Time getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(Time arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public String getBusType() {
        return busType;
    }

    public void setBusType(String busType) {
        this.busType = busType;
    }

    public int getDuration() {
        return ((int) (departureTime.getTime() - arrivalTime.getTime()) / (60 * 60 * 1000) % 24);
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
