import React,{useState, useEffect} from 'react';
import './App.css';
import Home from './components/home';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import UserDashBoard from './components/userdashboard';
import Basic_Plan from './components/basic_plan';
import Result from './components/result';
import {AuthContext} from './context';
import ProtectedRoute from './components/modules/route_protection/protectedroute';
import PublicRoutes from './components/modules/route_protection/publicroutes';


function App() {
    // const [isLogin, setIsLogin] = React.useState(null);

    // useEffect(()=>{
    //   const Check_U = localStorage.getItem("isLoggedIn");
    //   Check_U && JSON.parse(Check_U)? setIsLogin(true) : setIsLogin(false);
    // },[])

    // useEffect(()=>{
    //   localStorage.setItem("isLoggedIn", isLogin);
    // },[isLogin])

   
  return (
    <>
     <AuthContext.Provider>
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<PublicRoutes />} >
           <Route path='/' exact={true} element={ <Home />} />
          </Route>

             <Route element={<ProtectedRoute />} >
              <Route path='/user_dashboard' 
              element={<UserDashBoard />}  />
              <Route path='product_result/:product_id' element={<Basic_Plan />} />
              <Route path='calculated_result/:result_id' element={<Result />}  />
            </Route>
           
     {/* <Route path='*' element={<Navigate to={!isLogin? '/': 'user_dashboard' } /> } /> */}
         
       </Routes> 
    </BrowserRouter>
    </AuthContext.Provider>
    </>
  );
}

export default App;
