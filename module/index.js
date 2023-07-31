const dbConfig = require('../config/config')

const  {Sequelize}  = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host:dbConfig.HOST,
    dialect:dbConfig.dialect
})



async function testDatabaseConnection() {
    try {
      await sequelize.authenticate();
      console.log('Database connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  
 
  testDatabaseConnection();
  module.exports = sequelize




