
const connection = require('../config/db');
// const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs'); // Change from 'bcrypt' to 'bcryptjs'


const User = {
  findByEmail: (email, callback) => {
    connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results[0]);
    });
  },

  create: (user, callback) => {
    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) {
        return callback(err, null);
      }
      user.password = hash;
      connection.query('INSERT INTO users SET ?', user, (err, results) => {
        if (err) {
          return callback(err, null);
        }
        callback(null, results.insertId);
      });
    });
  }
};

module.exports = User;
