var Sequelize = require('sequelize');
var sequelize = require('../db/database');

var device_types = sequelize.define('device_types', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type:Sequelize.STRING,
    allowNull: false
  },
  status:Sequelize.INTEGER
});

device_types.associate = function(models) {
  device_types.hasMany(models.devices, { as: 'device' });
};

module.exports = device_types;