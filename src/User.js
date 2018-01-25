import React from 'react';

export default function User (props) {
  console.log(props.user);
    return (
      <div className="user-component-wrapper">

        <div className="user-card">
          <img className="user-card-img" src={props.user.picture.large} alt="User's Image"/>

          <div className="user-card-words">
            <div className="user-card-name">Name: {props.user.name.first} {props.user.name.last}</div>
            <div className="user-card-username">Username: {props.user.login.username}</div>
            <div className="user-card-gender">Gender: {props.user.gender}</div>
            <div className="user-card-nationality">Nationality: {props.user.nat}</div>
          </div>  
        
        </div>
      </div>
    );
}