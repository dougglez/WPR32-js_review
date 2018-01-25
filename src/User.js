import React from 'react';

export default function User (props) {
    return (
      <div className="user-component-wrapper">

        <div className="user-card">
          <img className="user-card-img" src='' alt="User's Image"/>

          <div className="user-card-words">
            <div className="user-card-name">Name: </div>
            <div className="user-card-username">Username: </div>
            <div className="user-card-gender">Gender: </div>
            <div className="user-card-nationality">Nationality: </div>
          </div>  
        
        </div>
      </div>
    );
}