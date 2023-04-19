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
      <div class="container">
        <form action="#">
           
              <div class="input-data">
                 <input type="text" required/>
                 <label for="">First Name</label>
              
           </div>
        </form>
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
