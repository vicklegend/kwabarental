import React,{Modal, Button, Form} from 'react-bootstrap';
import {FaSignInAlt, FaBookReader, FaKey} from 'react-icons/fa';

function Success_Modal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            REGISTRATION SUCCESSFUL
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>LOG INTO YOUR ACCOUNT</h4>
          <p>
          <img src='./assets/p_images/6.gif' className='img-responsive' />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default Success_Modal;