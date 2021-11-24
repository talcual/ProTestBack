var Sequelize = require('sequelize');

const database = new Sequelize('', '', '', {
    dialect: 'mariadb',
    host: "localhost",
    dialectOptions: {
      // Your mariadb options here
      // connectTimeout: 1000
    }
});

database.sync()

module.exports = database;