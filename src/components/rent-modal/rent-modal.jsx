
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export const RentModal = ( { closeModal }) => {

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className="titleCloseBtn">
          <button className="modalButton" onclick={() => closeModal(false)}> X </button>
        </div>
        <div className='modalTitle'>
          <h1>Are you sure you want to continue</h1>
        </div>
        <div className='modalBody'>
          <p>Modal Body</p>
        </div>
        <div className='modalFooter'>
          <button className="modalButton">Continue</button>
          <button className="modalButton" onclick={() => closeModal(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}