var Sequelize = require('sequelize');
var sequelize = require('../db/database');

var OperatingSystems = sequelize.define('operating_systems', {
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

module.exports = OperatingSystems;