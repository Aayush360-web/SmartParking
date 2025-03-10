const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
            
     Name:{
        type : String,
        require : true,
     },
     CarNo :{
        type : String,
        require : true,
     },
     ParSlot : {
        type : String,
        require : true,

     },
     Time : {
        type : String,
        require : true,
     },
     PhoneNo : {
      
        type : String,
        require : true,
     },
     VehicleType : {
      type : String,
      require : true,
   },
});


const User = new mongoose.model("User",userSchema);
module.exports = User;