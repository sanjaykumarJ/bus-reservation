package com.reservation.bus.service;

import com.reservation.bus.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BusSearchService extends JpaRepository<Bus,Integer> {

}
