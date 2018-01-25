import React, { Component, render } from 'react';
import axios from 'axios';
import User from './User';

class UserList extends Component {
  constructor() {
    super()

    this.state = {
      users: [],
      filtered: [],
      filteredValue: '',
      filterBy: '',
      isFiltered: false
    }
  }

  componentDidMount(){
    axios.get('https://randomuser.me/api/?results=25')
      .then(res => this.setState({
        users: res.data.results
      }))
      .catch(err => console.log(err));
  }

  filterUsers(filteredValue, filterBy) {
    console.log(filteredValue, filterBy);
    let filtered = this.state.users.filter(v => {
      console.log(v[filteredValue], filterBy)
      return v[filteredValue] === filterBy
    });
    console.log('filtered:', filtered);
    this.setState({
      filtered: filtered,
      isFiltered: true
    });
  }

  pickNumOfUsers(num) {
    axios.get(`https://randomuser.me/api/?results=${num}`)
      .then(res => this.setState({
        users: res.data.results
      }))
      .catch(err => console.log(err));
  }

  filterByPartialName(partialName) {
    console.log(partialName);
    let partialMatches = this.state.users.filter( (user, index, users) => {
      let fullName = user.name.first + user.name.last;
      return fullName.indexOf(partialName) >= 0;     
    });
    this.setState({
      filtered: partialMatches,
      isFiltered: true
    })
  }

  render() {
    console.log(this.state.filterBy)
    let users = this.state.isFiltered ? this.state.filtered.map((user,i) => (
      <User user={user} key={i}/>
    ))
    : this.state.users.map((user,i) => (
      <User user={user} key={i}/>
    ))
    return (
      <div className="component-wrapper userlist-component-wrapper">
        <div className="buttons">
          <select className="btn-select" onChange={e => this.setState({filteredValue: e.target.value})}>
            <option disabled selected value> -- select an option -- </option>
            <option value="name.first">Name</option>
            <option value="gender">Gender</option>
            <option value="nat">Nationality</option>
          </select>
          <div className="btn-input-wrapper">
            <input 
            id="name" 
            className="btn-input" 
            placeholder="Filter By..."
            onChange={e => this.setState({filterBy: e.target.value})}
            />
          </div>
          <button className="btn-button" onClick={() => this.filterUsers(this.state.filteredValue,this.state.filterBy)}>Search</button>
          <button className="btn-button" onClick={() => this.setState({isFiltered:false})}>Reset</button>
        </div>
        <div>
          <button className="btn-five btn-button" onClick={() => this.pickNumOfUsers(5)}>5</button>
          <button className="btn-five btn-button" onClick={() => this.pickNumOfUsers(10)}>10</button>
          <button className="btn-five btn-button" onClick={() => this.pickNumOfUsers(25)}>25</button>
        </div>
        <div className="user-wrapper">
          {users}
        </div>
      </div>
    );
  }
}

export default UserList;
