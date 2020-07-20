import React from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';
import { BusListGrid, Record } from './bus-list-grid';

let axiosDefaults = require('axios/lib/defaults');
axiosDefaults.baseURL = 'http://localhost:8080/';

interface SearchFormState {
  value: string;
  departureCity: string;
  arrivalCity: string;
  startDate: Date;
  endDate: Date;
  records: Record[]
}
export class SearchForm extends React.Component<any, SearchFormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
      departureCity: '',
      arrivalCity: '',
      startDate: new Date(),
      endDate: new Date(),
      records: []
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDepartureCityChange = this.handleDepartureCityChange.bind(this);
    this.handleArrivalCityChange = this.handleArrivalCityChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleDepartureCityChange(event: any) {
    this.setState({ departureCity: event.target.value });
  }

  handleArrivalCityChange(event: any) {
    this.setState({ arrivalCity: event.target.value });
  }

  handleStartDateChange(date: any) {
    this.setState({ startDate: date })
  }

  handleEndDateChange(date: any) {
    this.setState({ endDate: date })
  }

  async handleSearch(event: any) {
    if (this.state.departureCity && this.state.arrivalCity) {
      try {
        let response = await Axios.get('/querybuses', { params: { departureCity: this.state.departureCity, arrivalCity: this.state.arrivalCity } })
        console.log(response);
        this.setState({ records: response.data })
      } catch (e) {
        console.log(e.message);
      }
    } else {
      window.alert('Enter valid values in the required fields')
    }
  }

  render() {
    return (
      <div>
        <div className='flex-box'>
          <label aria-required={true}>
            {<p className='required-ash'>*</p>}Departure city:
            <input required type="text" value={this.state.departureCity} onChange={this.handleDepartureCityChange} />
          </label>
          <label>
            {<p className='required-ash'>*</p>}Arrival city:
            <input required type="text" value={this.state.arrivalCity} onChange={this.handleArrivalCityChange} />
          </label>
          <label>
            {<p className='required-ash'>*</p>}Departure date:
            <ReactDatePicker required selected={this.state.startDate}
              onChange={this.handleStartDateChange} />
          </label>
          <label>
            Arrival date:
            <ReactDatePicker selected={this.state.endDate}
              onChange={this.handleEndDateChange} />
          </label>
          <input type="button" onClick={this.handleSearch} value='Search Bus' />
        </div>
        {this.state.records.length > 0 && <BusListGrid records={this.state.records} />}

      </div>
    );
  }
}