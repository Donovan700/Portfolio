/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Header.css';

function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="container" id="header">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src="Boss2.png" alt="image" className='img-fluid' />
        </div>
        <div className="col-md-6">
          <h1 className="display-3">Welcome to my Portfolio</h1>
          <p className='display-10'>"First solve the problem, then write the code"</p>
          <button className='btn btn-primary' onClick={handleShow}>More...</button>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>More Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>About the quote</h3>
          <p>There is nothing more, Just kidding</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Fugiat rem rerum quas, 
            sequi esse quae ipsa laudantium quos ducimus assumenda consectetur tempore culpa animi unde eligendi ullam itaque, 
            placeat eum.
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Header;
