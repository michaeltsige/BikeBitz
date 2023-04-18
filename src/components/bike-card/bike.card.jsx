import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RentModal } from '../rent-modal/rent-modal';

import './bike-card.css';

export const BikeCard = (props) => {
  const [showRentModal, setShowRentModal] = useState(false);

  const handleRentClick = () => {
    setShowRentModal(true);
  };

  const handleRentModalClose = () => {
    setShowRentModal(false);
  };

  return (
    <>
      <Card style={{ width: '18rem', height: '20rem', backgroundColor: 'white' }}>
        <Card.Img variant="top" style={{ borderRadius: '15px' }} src={props.image} />
        <Card.Body>
          <Card.Title>
            <p className="t1">{props.name}</p>
          </Card.Title>
          <Card.Text>
            <p className="t2">{props.rate} wei</p>
          </Card.Text>
          <Button variant="primary" className="rent-button" onClick={handleRentClick}>
            Rent
          </Button>
        </Card.Body>
      </Card>
      {showRentModal? (<RentModal show={showRentModal} handleClose={handleRentModalClose} />):(<></>)}
    </>
  );
};
