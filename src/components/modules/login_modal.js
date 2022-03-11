import React,{useState, useEffect} from 'react'
import {Modal, Button, Form} from 'react-bootstrap';
import {FaSignInAlt,FaUserPlus, FaBookReader, FaKey} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";
import axios from 'axios';
// import {AuthContext} from "../../context";

function Login_Modal(props) {
      const navigate = useNavigate();
      // const {signIn} = React.useContext(AuthContext);

    const [email, setEmail] = useState('');
     const [pass, setPass] = useState('');
     const [loading, setLoading] = useState(false);
     const [errMsg, setErrMsg] = useState('');
     const [loginmodalShow, setLoginModalShow] = React.useState(false);

  const Login_Cred =()=> {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(!email){
      setErrMsg(<div className="alert alert-danger alert-dismissible fade show" role="alert">
          Email field is empty
         </div>);
     }else if(regex.test(email)===false){
      setErrMsg(<div className="alert alert-danger alert-dismissible fade show" role="alert">
          You entered an invalide email
      </div>);
     }else if(!pass){
      setErrMsg(<div className="alert alert-danger alert-dismissible fade show" role="alert">
      Password field is empty
       </div>);
     }else if(pass.length < 5){
      setErrMsg(<div className="alert alert-danger alert-dismissible fade show" role="alert">
         Password should be greater than five (5) characters
          </div>);
     }else{      
              if(email == "legend@gmail.com" && pass == "legend"){        
              navigate("/user_dashboard")
              localStorage.setItem("u_session", 2);
              }else{
                setErrMsg(<div className="alert alert-danger alert-dismissible fade show" role="alert">
                   Email or Password incorrect
                  </div>)
              }
            // axios.post('http://localhost:9000/.netlify/functions/loginUser', {
            //     email_u: email,
            //     pass_u: pass
            //   })
            //   .then(function (response) {

            //       if(response.data.result){
                          
            //            let datax = JSON.stringify(response.data.result[0].id);
            //               // console.log(datax)
            //                 localStorage.setItem("u_session", datax)
            //                   navigate(`/user_dashboard`)  
            //       }else if(response.data.message){
            //         setErrMsg(<div className="alert alert-danger alert-dismissible fade show" role="alert">
            //                   {response.data.message}
            //        </div>);
            //       }
            //       // alert(response.data.user || response.data.message);
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   });  
      }
      setLoading(true);
  }


  
  useEffect(()=>{
    setTimeout(()=>{
      setErrMsg("")
      setLoading(false)
    }, 10000)
  },[loading])

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            LOGIN
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {!errMsg? null: errMsg}
          <p>
          <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address <FaBookReader /></Form.Label>
                    <Form.Control type="email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                     placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password <FaKey /> </Form.Label>
                    <Form.Control type="password"
                     onChange={(event) => setPass(event.target.value)}
                     value={pass}
                      placeholder="Password" />
                </Form.Group>
                <center>
                {loading?
               <ScaleLoader color="#eb07ce" loading={loading} size={40} />
                : null 
               }
               </center>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
         <Button variant="success"onClick={Login_Cred} > Login <FaSignInAlt /></Button>
                </Form>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default Login_Modal;