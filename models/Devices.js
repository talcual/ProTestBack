var Sequelize = require('sequelize');
var sequelize = require('../db/database');
var device_types = require('./DevicesTypes');

var Devices = sequelize.define('devices', {
  serial: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type:Sequelize.STRING,
    allowNull: false
  },
  type:Sequelize.INTEGER,
  os:Sequelize.INTEGER,
  status: Sequelize.INTEGER
});

Devices.associate = function(models) {
  Devices.hasMany(device_types, {as: 'tipo'})
};


module.exports = Devices