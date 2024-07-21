// //db.js
// const mongoose=require("mongoose")



// mongoose.connect("mongodb://0.0.0.0:27017/Edulien")

//     .then(() => {
//     console.log("connect to MongoDB");
//     })
//     .catch((err) => {
//     console.log("error connecting to MongoDB",err);
// });
// const { Sequelize } = require('sequelize');
// const config = require('../config/config.json');

// const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
//   host: config.development.host,
//   dialect: config.development.dialect
// });

// module.exports = sequelize;
// db.js
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost', // Replace with your database host
  user: 'root', // Replace with your database user
  password: 'root', // Replace with your database password
  database: 'edulien' // Replace with your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id', connection.threadId);
});

module.exports = connection;
