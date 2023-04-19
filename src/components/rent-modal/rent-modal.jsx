import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export const RentModal = ({ closeModal }) => {
  const [rentMinutes, setRentMinutes] = useState('');

  const handleRent = () => {
    // Handle rent calculation and submission
    alert("Rent function here");
    closeModal(false);
  };

  const handleChange = (e) => {
    setRentMinutes(e.target.value);
  };
  return (
    <Modal show onHide={() => closeModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Rent Bike</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div class="container-form">
	      <div class="container__item">
		      <form class="form-style">
			      <input type="email" class="form" placeholder="Your E-Mail Address" />
			      <button type="button" class="primary-btn">Send</button>
		      </form>
	      </div>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeModal(false)}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleRent}>
          Rent
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
