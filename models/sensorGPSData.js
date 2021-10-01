const mongoose = require('mongoose');
const sensorGPSDataSchema = new mongoose.Schema({
        Bin_id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        garbageLevel: {
            type: String,
            required: true
        },
        latitude: {
            type: String,
            required: true
        },
        longitude: {
            type: String,
            required: true
        }, 
        emptied_timeStamp: {
            type: Date,
            default: Date.now(),
            required: false
        } 
       
    });

const sensorGPSData = mongoose.model('sensorGPSData',sensorGPSDataSchema)
module.exports= sensorGPSData;




  /*    name: {
               type: String,
               required: false
           }, 
           category:{
               default : "default"
           },
         
           status: {
               type: String,
               required: true
           },
   
             */