const mongoose = require('mongoose')
const { Schema } = mongoose;

const TrainSchema = new Schema({
    name:{
        type: String,
        required : true
    },
    
    number : {
        type : String,
        required : true,
        unique : true
    },

    arrivalTime : {
        type: String,
        required: true
    },
    departureTime : {
        type: String,
        required: true
    },
    seats : {
        type : Number,
        default : 0
    },
    source:{
        type: String,
        required : true
    },
    destination:{
        type: String,
        required : true
    },
    price: {
        type : Number,
        required : true
    },
  });

module.exports = mongoose.model('trains' , TrainSchema);