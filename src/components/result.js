/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import {Card, Button} from 'react-bootstrap'
import SendIcon from '@mui/icons-material/Send';
import { FaCheckSquare, FaSadTear } from "react-icons/fa";
import Header_Main from './modules/home_header'

import { PaperClipIcon } from '@heroicons/react/solid'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const products = [
  {
    id: 1,
    name: '4-BedRoom-Bungalow',
    href: '#',
    imageSrc: './assets/p_images/4-Bedroom-Bungalow.jpg',
    imageAlt: "3 bed rooms, 3 toilet, 1 palour, kitchen",
    price: 'N750,000',
    color: 'Click Here',
  },
]




export default function Result() {
     const params = useParams();
    const navigate = useNavigate();
     const {search} = useLocation()
    //  const searchParams = new URLSearchParams(params);
    const {plan_d, income_d,product_id} = queryString.parse(search);
  //  console.log(income_d);
  
  const [result_R, setResult] = useState([])
  const [User, setUser] = useState([])
  
  // useEffect(()=>{
  //   let u_data = localStorage.getItem("u_session");
  //   axios.get(`https://kwabarental.herokuapp.com/kwaba_user/${u_data}`)
  //   .then((res)=>{
  //         setUser(res.data)
  //   }).catch((e)=>{
  //        console.log("No Result found", e)
  //   })
  //    setResult(params.result_id)
  // },[params])

     const [housing, setHouse] = useState("");
  
  useEffect(() => {
    axios
      .get(`/.netlify/functions/api/data_api/${product_id}`)
      .then((res) => {
        setHouse(res.data);
      })
      .catch((e) => {
        console.log("No Result found", e);
      });
  }, []);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const months_two_section = ['January - June','July - December'];

  const [priceSilver, setPriceSilver] = useState("")
  const [priceGold, setPriceGold] = useState("");

 
    // This query is for the Gold Plan dividing income by 2
   let price = income_d;
      let equ = price / plan_d;
      months_two_section.forEach((item, index, arr)=>{
          // console.log(item +' = '+ equ )
 
      })

         // silver
      months.forEach((item, index, arr)=>{
          //  setPriceSilver(item +' = '+ equ )
      })
 
  
     const Back_Click =()=>{
       navigate(-2)
     }


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
            {/* ///////////// */}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              HERE IS YOUR CALCULATED RESULT.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our system are automated and professional. 
          </p>
        </div>

            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" >

              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Rental Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {/* {User.fullname} */} Victor Okon
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Application for House Rent</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <b>{housing.name}</b>
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {/* {User.email} */} legend@gmail.com
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">House Price</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <b>N{housing.price}</b>
              </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Basic Plan</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {plan_d==12?
              <><b>Silver</b></>
                  :
                  <><b>Gold</b></>
                  } 
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Monthly Payment</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {plan_d==12?
                  months.map((month_list, index)=>(
                     <>
                    <span key={index}>
                      <b>{month_list} {' '+'N'}{Math.ceil(equ)}{' '},</b>
                    </span>
                    </>
                  ))
                  :
                  months_two_section.map((month_list, index)=>(
                    <>
                   <span key={index}>
                     <b>{month_list} {' '+'N'}{Math.ceil(equ)}{' '},</b>
                   </span>
                   </>
                    ))
                  } 
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                {/* <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">resume_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li> */}
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">Print this page</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <Button onClick={()=>window.print()} className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </Button>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Approval</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {income_d >= housing.price?
                <div style={{flexDirection:"row"}}>You are Aproved <FaCheckSquare /></div>
                  :
                  <span style={{color:"red"}}>Sorry you are not approved <FaSadTear /></span>
                  } 
            </dd>
          </div>
        </dl>
      </div>
    </div>
              <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      {income_d >= housing.price?
       <Button variant="success" size="lg">PROCEED PAYMENT</Button> 
        :
        <Button variant="danger" size="lg" disabled>UNQUALIFIED</Button>
        } 
          {' '}
          <Button variant="primary" size="lg" onClick={Back_Click}> Back </Button>
    
      </div>
    </div>
               
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  )
}
