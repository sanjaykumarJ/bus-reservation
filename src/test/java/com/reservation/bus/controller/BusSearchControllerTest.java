package com.reservation.bus.controller;

import com.reservation.bus.model.Bus;
import com.reservation.bus.service.BusSearchService;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.sql.Time;
import java.util.*;

@WebMvcTest(value = BusSearchController.class)
public class BusSearchControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private BusSearchService busSearchService;

    @Test
    public void testQueryReturnsSortedByPriceDefaultFilteredList() throws Exception {
        List<Bus> busList = new ArrayList<Bus>();
        Bus mockBusOne = new Bus(1, "ppntravels", "Chennai", "Bangalore", new Time(0, 0, 0), new Time(0, 0, 0), "Volvo", 0, 999);
        Bus mockBusthree = new Bus(1, "ppntravels", "Chennai", "Bangalore", new Time(0, 0, 0), new Time(0, 0, 0), "Volvo", 0, 990);
        Bus mockBusTwo = new Bus(1, "ppntravels", "Madurai", "Coimbatore", new Time(0, 0, 0), new Time(0, 0, 0), "Volvo", 0, 99);
        busList.add(mockBusOne);
        busList.add(mockBusTwo);
        busList.add(mockBusthree);

        Mockito.when(busSearchService.findAll()).thenReturn(busList);
        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/querybuses").param("departureCity", "Chennai")
                .param("arrivalCity", "Bangalore");

        MvcResult result = mockMvc.perform(requestBuilder).andReturn();
        String expected ="[{\"id\":1,\"operatorName\":\"ppntravels\",\"departureLoc\":\"Chennai\",\"arrivalLoc\":\"Bangalore\",\"departureTime\":\"00:00:00\",\"arrivalTime\":\"00:00:00\",\"busType\":\"Volvo\",\"duration\":0,\"price\":990},{\"id\":1,\"operatorName\":\"ppntravels\",\"departureLoc\":\"Chennai\",\"arrivalLoc\":\"Bangalore\",\"departureTime\":\"00:00:00\",\"arrivalTime\":\"00:00:00\",\"busType\":\"Volvo\",\"duration\":0,\"price\":999}]";

        Assert.assertEquals(expected, result.getResponse().getContentAsString());
    }
}
