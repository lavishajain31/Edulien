// controllers/User.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const signup = (req, res) => {
  const { name, email, password } = req.body;
  User.findByEmail(email, (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Error checking user' });
    }
    if (user) {
      return res.status(400).json({ error: 'Email already in use' });
    }
    const newUser = { name, email, password };
    User.create(newUser, (err, userId) => {
      if (err) {
        return res.status(500).json({ error: 'Error creating user' });
      }
      res.status(201).json({ message: 'User created successfully', userId });
    });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email, (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Error checking user' });
    }
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ error: 'Error checking password' });
      }
      if (!isMatch) {
        return res.status(400).json({ error: 'Incorrect password' });
      }
      const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
      res.json({ message: 'Login successful', token });
    });
  });
};

module.exports = {
  signup,
  login,
};
