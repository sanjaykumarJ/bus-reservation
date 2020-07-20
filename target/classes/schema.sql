CREATE TABLE bus
        (
        id NUMBER(10) NOT NULL,
        operator_name VARCHAR(250) NOT NULL,
        departure_loc VARCHAR(250) NOT NULL,
        arrival_loc VARCHAR(250) NOT NULL,
        departure_time time NOT NULL,
        arrival_time time NOT NULL,
        bus_type VARCHAR(250) NOT NULL,
        duration Number(2),
        price Number(4) NOT NULL,
        PRIMARY KEY(id)
        );