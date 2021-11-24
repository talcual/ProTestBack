var express = require('express');
var router = express.Router();
const { Op } = require("sequelize");


var Employees = require('../models/Employee');
var EmployeeDevice = require('../models/Employee_Devices');


/* Create Employee */
router.post('/create', async function(req, res, next) {
  try {

    const response = await Employees.create({
      name : req.body.name,
      email: req.body.email
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

/* Update Employee */
router.post('/update', async function(req, res, next) {
  try {
    const response = await Employees.findByPk(req.body.id)
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

/* Listing Employees */
router.get('/list', async function(req, res, next){
  try {
    const response = await Employees.findAll()
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
})

/* Asignacion de dispositivo a un empleado */
router.post('/asign_device', async function(req, res, next){

  try {
    const response = await EmployeeDevice.findOne({
      where: {
        [Op.and]: [
          { id_empleado : req.body.employee },
          { id_device   : req.body.device   }
        ]
      }
    })
    .then(function(data){
      var res = {};

      if(data){
        res = {success:false, data: [], msg:'Este dispositivo ya ha sido asignado, no es posible volverlo a asignar.'}
      }else{

        const response = EmployeeDevice.create({
          id_empleado : req.body.employee,
          id_device   : req.body.device
        }).then(function(data){
          const res = { success: true, data: data, message:"Dispositivo asignado exitosamente." }
          return res;
        }).catch(error=>{
          const res = { success: false, error:error, data: 'error.' }
          return res;
        })

      }

      return res;

    }).catch(error =>{
      const res = { success: false, data: 'error.' }

      return res;
    })

    res.json(response);
  
  } catch (error) {
    console.log(error);
  }

});


/* get detail employee. */
router.post('/:id', async function(req, res, next){
  try {
    const response = await Employees.findByPk(req.params.id)
    .then(function(data){
      const res = { success: true, data: data }
      return res;
    }).catch(error =>{
      const res = { success: false, error: error }
      return res;
    })

    res.json(response);
  
  } catch (error) {
    console.log(error);
  }
})


module.exports = router;
