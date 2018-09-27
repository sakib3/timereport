import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = { users: null, user: null };
  }

  updateUsers(users) {
    this.setState((prevState, props) => {
      return { users: users, user: prevState.user }
    });
  }

  updateUser(user) {
    this.setState((prevState, props) => {
      return { users: prevState.users, user: user }
    });
  }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.updateUsers(users));
  }
  handleChange(event) {
    console.log(event.target.value);
    this.updateUser(event.target.value);
  }
  handleEvent(event, picker) {
    let username = this.state.user;
    let data = {
      startDate: picker.startDate.format('YYYY-MM-DD')+'T00:00:00Z',
      endDate: picker.endDate.format('YYYY-MM-DD')+'T00:00:00Z',
      userName: username
    }

    fetch('/api/timereport', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => err);

  }

  render() {
    const { users, user } = this.state;
    return (
      <div>
        {
          users ?
            <div>
              <select onChange={(e) => this.handleChange(e)}>
                {users.map((u) => <option value={u}>{u}</option>)}
              </select>
              <DateRangePicker onApply={(e, p) => this.handleEvent(e, p)}>
                <button>Select Date!</button>
              </DateRangePicker>
            </div>
            :
            <h1>Loading.. please wait!</h1>
        }
      </div>
    );
  }
}
