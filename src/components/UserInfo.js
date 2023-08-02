import React from 'react';
import '../style/userInfo.css';

const UserInfo = ({ user }) => {

  console.log('UserInfo', user);
  return (
    <div className="user-card">
      <div className="user-row">
        <span>Name:</span> 
        <span>{user.name}</span>
      </div>
      <div className="user-row">
        <span>Email:</span>
        <span>{user.email}</span>
      </div>
      <div className="user-row">
        <span className="recognization-label">Recognizations:</span>
      </div>
      {user.recognization.map((recognization, index) => (
        recognization.from ? (
          <div key={index} className="recognization-card">
            <div className="recognization-grid">
              <span>From: {recognization.from}</span>
              <span>Value: {recognization.value}</span>
              <span>Details: {recognization.details}</span>
            </div>
          </div>
        ) : null
      ))}
    </div>
  );
};

export default UserInfo;
