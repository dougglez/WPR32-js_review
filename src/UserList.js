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
  // API for random users
// 'https://randomuser.me/api/?results=25'

  render() {
    
    return (
      <div className="component-wrapper userlist-component-wrapper">
        <div className="buttons">
          <select className="btn-select" onChange={() => ''}>
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
            onChange={() => ''}
            />
          </div>
          <button className="btn-button" onClick={() => ''}>Search</button>
          <button className="btn-button" onClick={() => ''}>Reset</button>
        </div>
        <div className="user-wrapper">

        </div>
      </div>
    );
  }
}

export default UserList;
