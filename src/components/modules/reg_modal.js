import React,{useState, useEffect} from 'react';
import {Modal, Button, Form, Alert} from 'react-bootstrap';
import {FaHouseUser, FaUserPlus,FaUserCircle, FaAddressCard, FaKey, FaSave} from 'react-icons/fa';
import axios from 'axios';
import {useNavigate, Link, Navigate} from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";
import Success_Modal from './successful';


function RegModal(props) {
    
  const [success, setSuccess] = React.useState(false);

 
    // Create a function for reusable perpose
const generateRandomString = (myLength) => {
  const chars =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
  const randomArray = Array.from(
    { length: myLength },
    (v, k) => chars[Math.floor(Math.random() * chars.length)]
  );

  const randomString = randomArray.join("");
  return randomString;
};

    const navigate = useNavigate();

     const [Fullname, setFullname] = React.useState("");
     const [Username, setUsername] = React.useState("");
     const [Email, setEmail] = React.useState("");
     const [Password, setPassword] = React.useState("");
     const [Re_Password, setRe_Password] = React.useState("");
     const [ErrMsg, setErrMsg] = React.useState("");
     const [loading, setLoading] = useState(false);


     useEffect(() => {
       setTimeout(()=>{
          setErrMsg("")
          setLoading(false)
       },15000)
     }, [loading])
     
   const Register = ()=>{
  
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(!Fullname){
        setErrMsg(<Alert variant="danger">
                      Please Enter Fullname
                </Alert>);
    }else if (!Username) {
              setErrMsg(<Alert variant="danger">
              Username Field is empty
        </Alert>);
    }else if(!Email){
      setErrMsg(<Alert variant="danger">
                      Please Provide Email Address 
                </Alert>);
    }else if(regex.test(Email)===false){
      setErrMsg(<Alert variant="warning">
              You have Entered An Invalide Email... 
          </Alert>);
    }else if(!Password){
      setErrMsg(<Alert variant="danger">
            Password Field Is Empty... Enter A Password
      </Alert>);
    }else if(Password.length < 5){
      setErrMsg(<Alert variant="warning">
                      Password Is Less Than 5
                </Alert>);
    }else if(!Re_Password){
      setErrMsg(<Alert variant="danger">
                      Second password field is empty
                </Alert>);
     }else if(Password != Re_Password){
              setErrMsg(<Alert variant="warning">
               Password Not Matched.
        </Alert>);
    }else{

         axios.post('.netlify/functions/addUserData', {
          fullname: Fullname,
          username: Username,
          email: Email,
          password: Password,
          rand: generateRandomString(30)
         })
         .then(function (response) {
             if(response.status == 200){
              // navigate('/login')
               setSuccess(true)
             }
         })
         .catch(function (error) {
           console.log(error);
         });
    }
         setLoading(true)
   }


    return (
      <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            REGISTER AN ACCOUNT WITH US TODAY!!!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {ErrMsg && ErrMsg}
          <p>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Fullname <FaHouseUser /></Form.Label>
                <Form.Control type="text"
                onChange={(e)=> setFullname(e.target.value)}
                value={Fullname}
                 placeholder="Enter Firstname & Lastname" />
                <Form.Text className="text-muted">
                   Please Provide your fullname (Firstname & Lastname)
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username <FaUserCircle /></Form.Label>
                <Form.Control type="text"
                  onChange={(e)=> setUsername(e.target.value)}
                  value={Username}
                 placeholder="Enter username.." />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email <FaAddressCard /></Form.Label>
                <Form.Control type="email" 
                onChange={(e)=> setEmail(e.target.value)}
                value={Email}
                placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password <FaKey /></Form.Label>
                <Form.Control type="password"
                   onChange={(e)=> setPassword(e.target.value)}
                   value={Password}
                 placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Re-Enter Password <FaKey /></Form.Label>
                <Form.Control type="password"
                  onChange={(e)=> setRe_Password(e.target.value)}
                  value={Re_Password}
                   placeholder="Re-Enter Password" />
            </Form.Group>
             <center>
               {loading?
               <ScaleLoader color="#36D7B7" loading={loading} size={40} />
                : null 
               }
               </center>
            <Button variant="primary" onClick={Register}>
                CREATE ACCOUNT <FaSave />
            </Button>
         </Form>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

              <Success_Modal
          show={success}
          onHide={() => setSuccess(false)}
          />
      </>
    );
  }

  export default RegModal;