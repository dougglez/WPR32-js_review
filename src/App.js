import React, { Component } from 'react';

import UserList from './UserList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-wrapper">
        <header className="app-header"></header>
        <UserList />       
      </div>
    );
  }
}

export default App;
