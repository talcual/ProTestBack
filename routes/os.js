var express = require('express');
var router = express.Router();

const auth = require("../middleware/auth");
var OperatingSystems = require('../models/OperatingSystems');

/* Creating Device */
router.post('/create', async function(req, res, next) {
  try {
    
    const response = await OperatingSystems.create({
      name	  : req.body.name
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
    const response = await OperatingSystems.findByPk(req.body.id)
    .then(function(os){
      if (os) {
        os.update(req.body).success(function () {
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
    const response = await OperatingSystems.findByPk(req.body.id)
    .then(function(os){
      if (os) {
        os.update(req.body).success(function () {
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
    const response = await OperatingSystems.findAll()
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


module.exports = router;
