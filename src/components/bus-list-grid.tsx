import React from 'react';
import ReactDataGrid from "react-data-grid";
import { columnData } from "./grid-utils";
//import '../react-data-grid/dist/react-data-grid.css';

export interface Record {
    id: Number,
    operatorName: string;
    departureLoc: string;
    arrivalLoc: string;
    departureTime: string;
    arrivalTime: string;
    duration: number;
    busType: string;
}
interface Props {
    records: Record[];
}
interface state {
    records: Record[];
}
export class BusListGrid extends React.Component<Props, state>{
    constructor(props) {
        super(props)
        this.state = {
            records: props.records ? props.records : []
        }
    }

    sortByField(records: Record[], sortColumn: string, sortDirection: string): Record[] {
        if (sortDirection === "ASC") {
            records.sort((a, b) => { return a[sortColumn] > b[sortColumn] ? 1 : -1 })
        } else if (sortDirection === "DESC") {
            records.sort((a, b) => { return a[sortColumn] < b[sortColumn] ? 1 : -1 })
        }
        return records;
    }

    createButtonColumn(columns) {
        const buttonCellFormatter = {
            key: "button",
            name: "book",
            formatter: <button onClick={() => alert('Booking dialog will open')} value="Book"></button>
        }
        columns.push(buttonCellFormatter);
        return columns;
    }

    render() {
        return (<ReactDataGrid
            columns={columnData}
            rowGetter={i => this.state.records[i]}
            rowsCount={this.state.records ? this.state.records.length : 0}
            minHeight={500}
            onGridSort={(sortColumn, sortDirection) =>
                this.setState({ records: this.sortByField(this.state.records, sortColumn, sortDirection) })
            }
        />)
    }
}