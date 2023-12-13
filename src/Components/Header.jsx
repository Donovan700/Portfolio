/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './CSS/Header.css';

function Header() {
  return (
    <div className="container" id="header">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src="Boss2.png" alt="image" className='img-fluid' />
        </div>
        <div className="col-md-6">
          <h1 className="display-3">Welcome to my Portfolio</h1>
          <p className='display-10'>"First solve the problem,then write the code"</p>
          <button className='btn btn-primary'>More...</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
