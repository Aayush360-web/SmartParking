const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema({
    ir_value: {
        type: Number,
        required: true
    }
});

const Sensor = mongoose.model("Sensor", sensorSchema);

module.exports = Sensor;
