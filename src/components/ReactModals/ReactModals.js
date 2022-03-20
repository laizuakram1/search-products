import { Modal } from 'bootstrap';
import { Button } from 'bootstrap';
import React from 'react';

const ReactModals = ({show, setShow}) => {
   

    const handleClose = () => setShow(false);
    console.log('laizu');
    
    return (
        <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
   */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleShow}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default ReactModals;