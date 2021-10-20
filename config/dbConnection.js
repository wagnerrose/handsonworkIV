var Sequelize = require('sequelize');

const dbConnection = new Sequelize({
  dialect: 'sqlite',
  storage: '../db/database.sqlite'
  });
 
module.exports = dbConnection;