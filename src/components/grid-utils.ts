export const defaultColumnProperties = {
    sortable: true,
    width: 120
};

export const columnData = [
    {
        key: "id",
        name: "Bus Number",
        sortDescendingFirst: true
    },
    {
        key: "operatorName",
        name: "Operator Name"
    },
    {
        key: "departureLoc",
        name: "Departure Location"
    },
    {
        key: "arrivalLoc",
        name: "Arrival location"
    },
    {
        key: "departureTime",
        name: "Departure Time"
    },
    {
        key: "arrivalTime",
        name: "Arrival Time"
    },
    {
        key: "duration",
        name: "Duration"
    },
    {
        key: "busType",
        name: "Bus Type"
    },
].map(c => ({ ...c, ...defaultColumnProperties }));
