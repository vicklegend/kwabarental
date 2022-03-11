const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

// In other to grab variables coming from the express server 
app.use(express.json());
// const con = mysql.createConnection({
//     host: "localhost",
//   user: "root",
//   password: "",
//   database: "kwaba_db",
//   });
const con = mysql.createConnection({
    host: process.env.RX_HOSTNAME,
  user: process.env.RX_USER,
  password: process.env.RX_PASSWORD,
  database: process.env.RX_DATABASE,
  });
  
  con.connect((err)=>{
    if(!err)
       console.log('DB connection success');
    else
       console.log('DB connection fail', err)
})


app.use(cors({
    origin: "*",
  })) 

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server app listening on port ${PORT}`)
  })

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/data_api/', (req, res)=> {
    const products = [
      {
        id: 0,
        name: '4-BedRoom-Bungalow',
        href:  '/user_dashboard/0',
        imageSrc: '../assets/p_images/4-Bedroom-Bungalow.jpg',
        imageAlt: "3 bed rooms, 3 toilet, 1 palour, kitchen",
        price: '750000',
        color: 'Click Here',
      },
      {
          id: 1,
          name: '5 Bed Room Bungalow',
          href: '#',
          imageSrc: '../assets/p_images/massive-5-bedroom-fully-detached-duplex-detached-duplexes-for-sale-lekki-lagos.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '2.5,000.000',
          color: 'Click Here',
        },
        {
          id: 2,
          name: '2 Bungalow',
          href: '#',
          imageSrc: '../assets/p_images/bungalow-2-1024x683.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '250000',
          color: 'Click Here',
        },
        {
          id: 3,
          name: '3 Bedroom Flat',
          href: '#',
          imageSrc: '../assets/p_images/3 Bedroom Flat.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '450000',
          event: 'Click Here',
        }
      // More products...
       ]
          res.send(products)
  })

app.get('/data_api/:id', (req, res)=> {
  const products = [
     {
      id: 0,
      name: '4-BedRoom-Bungalow',
      href: 'alert(1)',
      imageSrc: '../assets/p_images/4-Bedroom-Bungalow.jpg',
      imageAlt: "3 bed rooms, 3 toilet, 1 palour, kitchen",
      price: '750000',
      color: 'Click Here',
    },
     {
        id: 1,
        name: '5 Bed Room Bungalow',
        href: '#',
        imageSrc: '../assets/p_images/massive-5-bedroom-fully-detached-duplex-detached-duplexes-for-sale-lekki-lagos.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '25000000',
        color: 'Click Here',
      },
      {
        id: 2,
        name: '2 Bungalow',
        href: '#',
        imageSrc: '../assets/p_images/bungalow-2-1024x683.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '250000',
        color: 'Click Here',
      },
      {
        id: 3,
        name: '3 Bedroom Flat',
        href: '#',
        imageSrc: '../assets/p_images/3 Bedroom Flat.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '450000',
        event: 'Click Here',
      }
    // More products...
     ]
        res.send(products[req.params.id])
})



// app.post('/admin', (req, res)=> {
//     const email_A = req.body.ad_email;
//     const username_A = req.body.ad_username;
//     const password_A = req.body.ad_password;
//     con.query(
//         "INSERT INTO admin (email,username,password) VALUES(?,?,?)",
//         [email_A,username_A,password_A],(err,result)=>{
//             if(err){
//                 res.send({result: "Account already exist"})
//                 // res.send({err: err})
//             }else{
//                 res.send({result: "Registration Successful"})  
//             }
//         }
//     )
// })


// app.post('/ad_login', (req,res)=> {
//   const ad_email = req.body.email_ad;
//   const ad_pass = req.body.pass_ad;

// con.query(
//   "SELECT * FROM admin WHERE email=? AND password=?",
//    [ad_email,ad_pass],(err,result)=>{
//         if(err){
//           res.send({err: err})
//         }
     
//        if(result.length > 0) {
//          res.send({message: "User Exist!!! "});
//        } else {
//          res.send({message: "Wrong username / password combination."})
//        }
    
//   }
// )
// })

app.get('/kwaba_user/:u_id', (req,res)=> {
     
con.query(
   "SELECT * FROM users ORDER BY id ",(err,result)=>{
        if(err){
          res.send({err: err})
        }
     
       if(result) {
         res.send(result[req.params.u_id]);
       }
  }
)
})

// app.post('/del_user/', (req, res)=>{
//    const del_u = req.body.u_del
//   con.query("DELETE FROM users WHERE id='?' ",
//          [del_u],(err, result)=>{
//      if(result){
//        res.send({Delete: "User successfully deleted"})
//      }else{
//         res.send({err: err})
//      }
//   })
// })

app.post('/register_user', (req,res)=>{
  const fullname = req.body.fullName
  const username = req.body.userName
  const email = req.body.emailAdrr
  const password = req.body.passWord
  const rand_u = req.body.randUser
    
  // res.send({reg_confirmed: 'Registration Successfully Completed'})

   con.query(
     "INSERT INTO users (fullname,username,email,password,rand) VALUE(?,?,?,?,?)",[fullname,username,email,password,rand_u],
     (err,result)=>{
         if(result){
             res.send({reg_confirmed: 'Registration Successfully Completed'})
         }else{
          res.send({reg_exist: 'Account Already Exist!!!'})
         }
     }
   )
})

app.post('/login_user', (req,res)=> {
      const userEmail = req.body.email_u
      const userPass =  req.body.pass_u

    con.query(
      "SELECT * FROM users WHERE email=? AND password=?",
       [userEmail,userPass],(err,result)=>{
            if(err){
              res.send({err: err})
            }
         
           if(result.length > 0) {
             res.send({result: result });
           } else {
             res.send({message: "Wrong username / password combination."})
           }
        
      }
    )
})