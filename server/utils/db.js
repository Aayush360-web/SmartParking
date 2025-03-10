const mongoose = require('mongoose');

// const URI  = "mongodb://127.0.0.1:27017/mern_admin";
const URI  = "mongodb+srv://AayushDatabase:ProjectPubg27@cluster0.hegitxw.mongodb.net/Project_admin?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async () => {
     
         try {
            await mongoose.connect(URI ,{
               useNewUrlParser: true,
               useUnifiedTopology: true
           });
            console.log("Database Connection success");

         } catch (error) {
            console.log("Database Connection failed")
         }

};

module.exports = connectDB;

