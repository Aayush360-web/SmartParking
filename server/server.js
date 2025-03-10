const express = require("express");
const cors = require("cors")
const app = express();
const router =require("./router/auth-router");
const connectDB = require("./utils/db");
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const axios = require('axios');

const corsOptions={
   
    origin:'http://localhost:5173',
    methods:"GET,POST,PUT,DELETE,PATH,HEAD",
    credentials:true,

}

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", router);

const PORT = 2001;
const port = 3001 ;

connectDB().then(()=> {
    app.get('/fetchData', async (req, res) => {
        try {
          // Make a request to the external webpage to fetch data
          const response = await axios.get('http://192.168.206.57/');
          
          // Serve the fetched data as the response to the request
          res.send(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
          res.status(500).send('Internal Server Error');
        }
      });
    app.listen(PORT, ()=> {
       console.log("Its running on port ",PORT);
    });
   
});