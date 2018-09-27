import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = { users: null, user: null, data: null };
  }

  updateUsers(users) {
    this.setState((prevState, props) => {
      return { users: users, user: prevState.user, data: prevState.data }
    });
  }

  updateUser(user) {
    this.setState((prevState, props) => {
      return { users: prevState.users, user: user, data: prevState.data }
    });
  }

  updateTable(data){
    this.setState((prevState, props) => {
      return { users: prevState.users, user: prevState.user, data: data }
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
    .then(data => this.updateTable(data))
    .catch(err => err);

  }

  render() {
    const { users, user, data } = this.state;
    return (
      <div style={{marginTop: 1 +'rem'}}>
        {
          users ?
            <div>
              <div class="selection-group">
                <select type="button" class="btn btn-secondary" style={{marginRight: .5 + 'rem'}} onChange={(e) => this.handleChange(e)}>
                  <option value="" selected disabled hidden>Select User</option>
                  {users.map((u) => <option value={u}>{u}</option>)}
                </select>
                <DateRangePicker onApply={(e, p) => this.handleEvent(e, p)}>
                  <button type="button" class="btn btn-secondary">Select Date</button>
                </DateRangePicker>
              </div>

              <div class="table-data" style={{marginTop: 1 +'rem'}}>
                {
                  data && data.length >0 ?
                  <table class="table">
                    <thead class="thead-light">
                      <tr>
                        <th>User Name</th>
                        <th>Type Id</th>
                        <th>Start</th>
                        <th>Hours</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row) => {
                        return <tr>
                                  <td>{row.user_name}</td>
                                  <td>{row.type_id}</td>
                                  <td>{row.start}</td>
                                  <td>{row.hours}</td>
                              </tr>;
                      })}
                      
                    </tbody>
                  </table>
                  :
                  <div></div>
                }
              </div>

            </div>

            :
            <h1>Loading.. please wait!</h1>
        }
      </div>
    );
  }
}
