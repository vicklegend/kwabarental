import React, { useState, useEffect } from "react";
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Card, Button, Toast, Col, Row } from "react-bootstrap";
import SendIcon from "@mui/icons-material/Send";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { FaArrowLeft } from "react-icons/fa";
import {
  Navigate,
  Link,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import axios from "axios";
import Header_Main from "./modules/home_header";
import queryString from "query-string";
import House_Data from "./house_data";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Basic_Plan() {
  const params = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState("");
  console.log(params);
  useEffect(() => {
    // let u_data = localStorage.getItem("u_session");
    axios
      .get(
        `/.netlify/functions/api/data_api/${params.product_id}`
      )
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => {
        console.log("No Result found", e);
      });
  }, [params]);

  const [User, setUser] = useState([
    {
      fullname: "Victor Okon",
      username: "LEGEND",
      email: "legend@gmail.com",
    },
  ]);
   
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // let u_data = localStorage.getItem("u_session");
    // axios
    //   .get(`https://kwabarental.herokuapp.com/kwaba_user/${u_data}`)
    //   .then((res) => {
    //     setUser(res.data);
    //   })
    //   .catch((e) => {
    //     console.log("No Result found", e);
    //   });

     setTimeout(()=>{
        setShowToast(false)
     },15000)
  }, [showToast]);

  const [Plan, setPlan] = useState("");
  const [Income, setIncome] = useState("");

  const p_data = [{ plan: Plan }, { income: Income }];
  let v_data = JSON.stringify(p_data);

 
  const Calc = (props) => {
    if (Plan == 0) {
      setShowToast(true);
       setShow(true)
    } else if (!Income) {
      alert("Please specify your monthly income");
    } else {
      navigate(
        `/calculated_result/result?plan_d=${Plan}&income_d=${Income}&product_id=${products.id}`
      );
    }
  };

  return (
    <>
      <div className="min-h-full">
        <Header_Main signOut="signOut" />

        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}

            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                You may proceed with the following {User.username}
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                PLEASE INPUT YOUR MONTHLY INCOME.
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Our system are automated and professional.
              </p>
            </div>

            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    {products && (
                      <>
                        <Grid item xs={8} key={products.id}>
                          <Item>
                            <img
                              src={products.imageSrc}
                              alt={products.imageAlt}
                              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                          </Item>
                        </Grid>
                       
                        <Grid item xs={4}>
                          <Item>
                            <h1>{products.name}</h1>
                            <p>
                              Price: <b>N{products.price}</b>
                            </p>
                            <p>
                              <label>Select Your Basic Plan</label>
                              <select
                                value={Plan}
                                onChange={(event) =>
                                  setPlan(event.target.value)
                                }
                                className="form-control"
                              >
                                <option value="0">-- Select Plan --</option>
                                <option value="12">Silver</option>
                                <option value="2">Gold</option>
                              </select>
                            </p>
                            <p>
                              <label>Enter Your Monthly Income</label>
                              <p>
                                <b>N{Income}</b>
                              </p>
                              <input
                                type="number"
                                onChange={(event) =>
                                  setIncome(event.target.value)
                                }
                                placeholder="Monthly Income Value..."
                                className="form-control"
                              />
                              <br />
                              <Button variant="success" onClick={Calc}>
                                Calculate
                              </Button>
                            </p>
                            <p>

                          {showToast && (
                                <>
                                  <Row>
                                    <Col xs={6}>
                                      <Toast
                                        onClose={() => setShow(false)}
                                        show={show}
                                        delay={3000}
                                        autohide
                                      >
                                        <Toast.Header>
                                          <img
                                            src="holder.js/20x20?text=%20"
                                            className="rounded me-2"
                                            alt=""
                                          />
                                          <strong className="me-auto">
                                            Notice!!!
                                          </strong>
                                          {/* <small>11 mins ago</small> */}
                                        </Toast.Header>
                                        <Toast.Body>
                                         You have not selected a plan
                                        </Toast.Body>
                                      </Toast>
                                    </Col>
                                    {/* <Col xs={6}>
                                     
                                    </Col> */}
                                  </Row>
                                </>
                              )}   

                              <Link to="/user_dashboard">
                                <Button variant="primary">
                                  <FaArrowLeft />
                                </Button>
                              </Link>
                            </p>
                          </Item>
                        </Grid>
                        {/* <Grid item xs={4}>
          <Item></Item>
        </Grid> */}
                        <Grid item xs={8}>
                          <Item>
                            <span style={{ color: "red" }}>
                              <b>Note:</b>
                            </span>{" "}
                            Selection of <b>Gold Plan</b> means Payment will be
                            made twice a year, While Selection of{" "}
                            <b>Silver Plan</b> authencate monthly Payment.
                          </Item>
                        </Grid>
                      </>
                    )}
                  </Grid>
                </Box>

                <div className="bg-white">
                  <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"></div>
                </div>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
