import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const RentModal = ({ closeModal }) => {
  const [rentHours, setRentHours] = useState('');

  const handleRent = () => {
    // Handle rent calculation and submission
  };

  const handleChange = (e) => {
    setRentHours(e.target.value);
  };

  return (
    <Modal show onHide={() => closeModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Rent Bike</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Rent Hours</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter rent hours"
              value={rentHours}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
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
