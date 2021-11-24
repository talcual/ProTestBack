
var Sequelize = require('sequelize');
var sequelize = require('../db/database');

var Employees = sequelize.define('employees', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type:Sequelize.STRING,
    allowNull: false
  },
  email: Sequelize.STRING
});

module.exports = Employees