import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./bike-card.css";
import { useState } from 'react';

import { RentModal } from '../rent-modal/rent-modal';
import { Modal } from 'bootstrap';

export const BikeCard = (props) => {
  


  return (
    <>
    <Card style={{ width: '18rem', height: '20rem', backgroundColor:'white'}}>
      <Card.Img variant="top" style={{borderRadius: '15px'}}  src={props.image} />
      <Card.Body>
        <Card.Title ><p className="t1">{props.name}</p></Card.Title>
        <Card.Text>
          <p className="t2">{props.rate} wei</p>
        </Card.Text>
        <Button variant="primary" className="rent-button" >Rent</Button>
      </Card.Body>
    </Card>
    </>
  );
}
