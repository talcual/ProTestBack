var Sequelize = require('sequelize');

const database = new Sequelize('kaiohost_neos', 'kaiohost_neo', '@eltc870122', {
    dialect: 'mariadb',
    host: "scholasonline.ml",
    dialectOptions: {
      // Your mariadb options here
      // connectTimeout: 1000
    }
});

database.sync()

module.exports = database;