import React from 'react'
import {Navbar, Container, Nav,
     NavDropdown, Form, 
     FormControl, Button} from 'react-bootstrap'
import RegModal from './reg_modal';
import {FaUserPlus, FaHome, FaPencilAlt, FaInfoCircle,FaLocationArrow} from 'react-icons/fa';
import Login_Modal from './login_modal';

function Header({about_href,faq_href}) {

  const [modalShow, setModalShow] = React.useState(false);
  const [loginmodalShow,setLoginModalShow] = React.useState(false);

  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
        <img src='../assets/p_images/KWABA.jpg' width={50} />
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home <FaHome /> </Nav.Link>
      <Nav.Link href={about_href}>About Us <FaPencilAlt /> </Nav.Link>
      <Nav.Link href={faq_href}>F.A.Q <FaInfoCircle /> </Nav.Link>
      <Nav.Link onClick={() => setModalShow(true)}>Register <FaUserPlus /> </Nav.Link>
      <Nav.Link onClick={() => setLoginModalShow(true)}>Login <FaLocationArrow /> </Nav.Link>
    </Nav>
        
    {/* <Button variant="primary" onClick={() => setModalShow(true)}>
              Register <FaUserPlus />
      </Button> */}
      <RegModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
       |
      {/* ////////////////// */}
      {/* <Button variant="success" onClick={() => setLoginModalShow(true)}>
              Login <FaLocationArrow />
      </Button> */}
      <Login_Modal
        show={loginmodalShow}
        onHide={() => setLoginModalShow(false)}
      />


    </Container>
  </Navbar>

    </>
  )
}

export default Header