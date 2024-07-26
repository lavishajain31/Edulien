
// // db.js
// const mysql = require('mysql2');

// // Create a connection to the database
// const connection = mysql.createConnection({
//   host: 'localhost', // Replace with your database host
//   user: 'root', // Replace with your database user
//   password: 'root', // Replace with your database password
//   database: 'edulien' // Replace with your database name
// });

// // Connect to the database
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err.stack);
//     return;
//   }
//   console.log('Connected to the database as id', connection.threadId);
// });

// module.exports = connection;
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
