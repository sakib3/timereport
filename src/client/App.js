import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
//import './app.css';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  handleEvent(event, picker) {
    let data = {
      startDate: picker.startDate.format('YYYY-MM-DDT00:00:00Z'),
      endDate: picker.endDate.format('YYYY-MM-DDT00:00:00Z'),
      userName: 'kamger'
    }

    fetch('/api/getTimeReport', {
      method: 'POST',
      mode: 'CORS',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => err);




  }

  render() {
    const { username } = this.state;

    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <DateRangePicker onApply={this.handleEvent}>
          <button>Select Date!</button>
        </DateRangePicker>
      </div>
    );
  }
}
