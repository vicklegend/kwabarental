import React, {useState} from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import Home from '../../home';


   // Using react hooks useMemo
//    const authContext = React.useMemo(() =>{
//     const [isLogin, setIslogin] = useState(null);
                                                 
//     return {
//        signIn: ()=> {
//          setIsLogin(true)
//          },
//            signOut: ()=> {
//             setIsLogin(false)
//             localStorage.clear("u_session")
//          },  
//     }
//   },[]);
  
const useAuth = ()=>{
    const user = localStorage.getItem("u_session")
    
    if(user){
        return true
    }else{
        return false
    }
}
  
const PublicRoutes =()=> {
    const isAuth = useAuth();   
    return  ( 
             isAuth? 
             <Navigate to="/user_dashboard" /> // navigate back to home    
               :
                <Outlet />  //userdashboard (Home)
                   
             
    )
}



export default PublicRoutes;