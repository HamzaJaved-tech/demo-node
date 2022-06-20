const express = require('express');

const { Sequelize } = require("sequelize");
const taskRoute = require("../express/app");



const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'mysql',
  database: 'management_app',
  username: 'root',
  password: ''
});





const modelDefiners = [
  require('./models/task')
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}



(async () => {
  await sequelize.sync();

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

})();


module.exports = sequelize;








