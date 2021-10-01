var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const sensorGPSData = require('../models/sensorGPSData');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Smart Garbage Management System' });
});
router.post("/addsensorGPSData", (req, res) => {
  const { Bin_id, name,garbageLevel, latitude, longitude} = req.body;
  let errors = [];
  if (!Bin_id || !name || !garbageLevel || !latitude || !longitude) {
    errors.push({ msg: "Parameters are missing" });
  }
  if (errors.lenght > 0) {
    res.json({ Message: errors });
  } else {
    const newsensorGPSData = new sensorGPSData({
      Bin_id,
      name,
      garbageLevel,
      latitude,
      longitude
    });
    newsensorGPSData
      .save()
      .then(newsensorGPSData => {
        res.json({ Message: "Data Inserted" });
      })
      .catch(err => console.log(err));

  }
});

module.exports = router;

router.get("/getdata/:Bin_id",(req,res) =>{
  var Bin_id= req.params.Bin_id;
  console.log(Bin_id);

  sensorGPSData.find({Bin_id: Bin_id}).exec((err, Bin_id)=>{
    console.log(Bin_id);
    res.json(Bin_id);
  });
});

/* 
{
      "Bin_id": "145",
      "garbageLevel" : "70%",
      "latitude" :  " 34.00563",
      "longitude" :  "71.48748"
}

*/
