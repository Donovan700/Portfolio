import React from 'react';
import './CSS/Header.css';

function Header() {
  return (
    <div className="container" id="header">
      <div className="row align-items-center">
        <div className="col-md-6">
          {/* <span className='badge'><img src="../../public/Delighted.png" alt="image" className="rounded-circle" /></span> */}
          <img src="../../public/Boss2.png" alt="image" className='img-fluid' />
          {/* <span className='badge'><img src="../../public/Sized.png" alt="image" className="rounded-circle" /></span> */}
        </div>
        <div className="col-md-6">
          <h1 className="display-3">Welcome to my Portfolio</h1>
          <p className='display-10'>"First solve the problem,then write the code"</p>
          {/* <button className="btn btn-primary">Cliquez ici</button> */}
          <button className='btn btn-primary'>More...</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
