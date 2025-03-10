const express = require("express");
const router = express.Router();
const {register,CustomerData,deleteuserbyID,saveSensorData} = require("../controllers/auth-controller");


router.route("/NewSpot").post(register);
router.route("/sensor").get(saveSensorData);
router.route("/AvailSpots").get(CustomerData);
router.route("/AvailSpots/delete/:id").delete(deleteuserbyID);
module.exports = router;