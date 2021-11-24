var express = require('express');
var router = express.Router();

var device_types = require('../models/DevicesTypes');
var Devices = require('../models/Devices');


/* Creating Device */
router.post('/create', async function(req, res, next) {
  try {
    
    const response = await Devices.create({
      serial  : req.body.serial,
      name	  : req.body.name,
      type	  : req.body.type,
      os      : req.body.os
    }).then(function(data){
      const res = { success: true, data: data, message:"created successful" }
      return res;
    }).catch(error=>{
      const res = { success: false, error: error }
      return res;
    })

    res.json(response);

  } catch (e) {
    console.log(e);
  }
});

/* Update device data */
router.post('/update', async function(req, res, next) {
  try {
    const response = await Devices.findByPk(req.body.serial)
    .then(function(device){
      if (device) {
        device.update(req.body).success(function () {
          const res = { success: true, data: data }
        })
      }

      return res;
    }).catch(error =>{
      const res = { success: false, error: error }
      return res;
    })

    res.json(response);

  } catch (e) {
    console.log(e);
  }
});

/* Soft Delete for Devices */
router.post('/delete',async function(req, res, next) {
  try {
    const response = await Devices.findByPk(req.body.id)
    .then(function(employee){
      if (employee) {
        employee.update(req.body).success(function () {
          const res = { success: true, data: data }
        })
      }

      return res;
    }).catch(error =>{
      const res = { success: false, error: error }
      return res;
    })

    res.json(response);

  } catch (e) {
    console.log(e);
  }
});

/* Get Device Listing */
router.get('/list', async function(req, res, next) {
  try {
    const response = await Devices.findAll()
    .then(function(data){
      const res = { success: true, data: data }
      return res;
    })
    .catch(error =>{
      const res = { success: false, error: error }
      return res;
    })
    res.json(response);
  
  } catch (error) {
    console.log(error);
  }
});


/* Get Device Detail */
router.get('/:id', async function(req, res, next) {
  try {
    const response = await Devices.findByPk(req.params.id)
    .then(function(data){
      console.log(data.get());
      const res = { success: true, data: data }
      return res;
    }).catch(error =>{
      console.log(error);
      const res = { success: false, error: error }
      return res;
    })

    res.json(response);
  
  } catch (error) {
    console.log(error);
  }
});

/* Get Device Types */
router.get('/types',async function(req, res, next) {
  try {
    const response = await DevicesTypes.findAll()
    .then(function(types){
      const res = { success: true, data: types }
      return res;
    })
    .catch(error =>{
      const res = { success: false, error: error }
      return res;
    })

    res.json(response);
  
  } catch (error) {
    console.log(error);
  }
});



module.exports = router;
