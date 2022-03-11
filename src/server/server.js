const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// In other to grab variables coming from the express server 
app.use(express.json());

app.use(cors({
    origin: "*",
  })) 

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server app listening on port ${PORT}`)
  })

//   mongodb://<dbuser>:<dbpassword>@ds241658.mlab.com:41658/test_db
  mongoose.connect(`mongodb://<dbuser>:<dbpassword>@ds241658.mlab.com:41658/test_db`,(err)=>{
    if(err) throw err;
    console.log("DB Successfully connected");
    })