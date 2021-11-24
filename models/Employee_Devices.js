const { Model, DataTypes, Deferrable, Sequelize } = require('sequelize');
var sequelize = require('../db/database');

var EmployeeDevices = sequelize.define('employee_devices', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_empleado: {
    type:Sequelize.STRING,
    allowNull: false
  },
  id_device: {
    type:Sequelize.STRING,
    allowNull: false
  },
  fecha_asignacion: { 
    type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW 
  }
});

module.exports = EmployeeDevices;