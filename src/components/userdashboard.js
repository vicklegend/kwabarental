/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header_Main from "./modules/home_header";


export default function UserDashBoard({ Logout_X }) {
  // const {signOut} = React.useContext(AuthContext);
  const params = useParams();
  const navigate = useNavigate();

   const [products, setProducts] = useState([]);
  const [User, setUser] = useState([]);
  // const [stateProperty, setStateProperty] = useState({
  //   data_id: "",
  //   data_name: "",
  //   data_imageSrc: "",
  //   data_price: "",
  // });

   useEffect(()=>{
        let u_data = localStorage.getItem("u_session");
      axios.get("/.netlify/functions/api/data_api")
      .then((res)=>{
            setProducts(res.data)
      }).catch((e)=>{
           console.log("No Result found", e)
      })

  //     axios.get(`https://kwabarental.herokuapp.com/kwaba_user/${u_data}`)
  //     .then((res)=>{
  //           setUser(res.data)
  //            console.log(res.data)
  //     }).catch((e)=>{
  //          console.log("No Result found", e)
  //     })
   },[])

  const [House_P, setHouse_P] = React.useState("");

  const HouseValue = () => {
    navigate(`/product_result/${House_P}`);
  //     setStateProperty({
  //       data_id: "",
  //       data_name: "",
  //       data_imageSrc: "",
  //       data_price: "",
  //     })
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Header_Main signOut="signOut" />

        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}

            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                You Welcome <b>LEGEND</b>
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                SELECT YOUR ACCOMODATION STATUS.
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Our system are automated and professional.
              </p>
            </div>

            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                <div className="bg-white">
                  <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                      Customers also purchased
                    </h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      {products &&
                        products.map((product) => (
                          <div className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                              <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                              />
                            </div>
                            <div className="mt-4 flex justify-between">
                              <div>
                                <h3 className="text-sm text-gray-700">
                                  <b>
                                    {/* href={product.href} */}
                                    <span
                                      aria-hidden="true"
                                      className="absolute inset-0"
                                    />
                                    {product.name}
                                  </b>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                  Number Selection {product.id}
                                </p>
                              </div>
                              <p className="text-sm font-medium text-gray-900">
                                N{product.price}
                              </p>
                              {/* <Link to={`/user_dashboard/${product.id}`}>
             <Button variant="success">CLICK HERE</Button>
             </Link> */}
                            </div>
                          </div>
                        ))}
                    </div>
                    <br /> <br />
                    <center>
                      <label>
                        <b>
                          Choose property from the following number given above
                        </b>
                      </label>
                      {products.map((product)=>{
                        <>
                         <input type="text" value={product.id} />
                        </>
                      })}
                     
                      <select
                        value={House_P}
                        className="form-control"
                        onChange={(e) => setHouse_P(e.target.value)}
                      >
                        <option>- - Choose Selected Number --</option>
                        {products.map((product) => (
                          <option value={product.id}>
                            {product.id}
                            {"===>"}
                            {product.name}
                            {"=="}
                            {product.price}
                          </option>
                        ))}
                      </select>{" "}
                      <br />
                      <Button
                        variant="success"
                        className="btn-lg"
                        onClick={HouseValue}
                      >
                        PROCEED
                      </Button>
                    </center>
                  </div>
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
