import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './bike-card.css';

export const BikeCard = (props) => {
  const [showRentModal, setShowRentModal] = useState(false);
  const [rentMin, setRentMin] = useState(0);
  const [rentFee, settRentFee] = useState(0);
  const [rentStatus, setRentStatus] = useState(false);

  const handleRentClick = () => {
    setShowRentModal(true);
  };

  const rentBike = (fee) => {
    //renting funtion here
    
    setRentStatus(true);
    
  };

  useEffect(()=>{
    settRentFee(rentMin * props.rate);
  }, [rentMin, props.rate]);

  return (
    <>
      <Card style={{ width: '18rem', height: '20rem', backgroundColor: 'white' }}>
        <Card.Img variant="top" style={{ borderRadius: '15px' }} src={props.image} />
          {rentStatus? 
            (
              <>
                <p className="rented">Rented!!!</p>
              </>
            )
          :
            (
              <Card.Body>
                <Card.Title>
                  {showRentModal? 
                    (<p className="t1">Rent Fee: {rentFee} wei</p>)
                    :
                    (<p className="t1">{props.name}</p>)
                  }
                </Card.Title>
                <Card.Text>
                  {showRentModal ? 
                    (<><input class="form-field" 
                              type="text" 
                              placeholder="Rent Time in mins" 
                              onChange={(e)=>setRentMin((Number(e.target.value)))}
                        />
                    </>
                    )
                    :
                    (<><p className="t1">{props.rate} wei</p></>)
                  }
      
                  {showRentModal? 
                    (
                      <Button variant="primary" className="rent-button" onClick={()=>rentBike(rentFee)}>
                        RentBike
                      </Button>
                    )
                  : 
                    (
                      <Button variant="primary" className="rent-button" onClick={()=>handleRentClick()}>
                        Rent
                      </Button>
                    )
                  }
                </Card.Text>
              </Card.Body>
            )
          }
        
      </Card>
      
    </>
  );
};
