const User = require("../models/user-model");
const Sensor = require("../models/sensor-model");


const deleteuserbyID  = async (req,res) => {
         
      try {

           const id = req.params.id;
           await User.deleteOne({ _id :id });
           return res.status(200).json({message: "User deleted succesfully"})
         
      } catch (error) {

         next(error);
      }

}



const CustomerData = async(req,res)=>{
        
   try {
       
      const users = await User.find();
      console.log(users);
      if(!users || users.length === 0){
        
         return res.status(404).json({message : "NO USERS FOUND"});
      }
      res.status(200).json(users);
   } catch (error) {
      next(error);
   }


}

const saveSensorData = async (req, res) => {
   try {
/*
       const { ir_value } = req.body;
       console.log(req.body);
       await Sensor.create({ ir_value });  */
       const irData = await Sensor.find(); // Fetch all sensor data from MongoDB
       res.json(irData); // Return the data as JSON
       
   } catch (error) {
       console.log(error);
       res.status(500).json({ message: "Internal server error" });
   }
};

const register = async(req, res)=>{

    try{

      console.log(req.body);

      const {Name,CarNo,ParSlot,Time,PhoneNo,VehicleType} = req.body;
      await User.create({Name,CarNo,ParSlot,Time,PhoneNo,VehicleType});


      res.status(200).json(req.body)
    }
    catch(error){
       console.log(error);
    }
   };

module.exports = {register,CustomerData,deleteuserbyID,saveSensorData};