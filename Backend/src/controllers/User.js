
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      // Generate a token for the existing user
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' } // Token expiration time
      );

      return res.status(200).json({
        msg: 'User already exists',
        id: user._id,
        token
      });
    }

    // If user doesn't exist, create a new one
    user = new User({ name, email, password });
    await user.save();

    // Generate a token for the new user
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // Token expiration time
    );

    res.status(201).json({
      msg: 'User registered successfully',
      id: user._id,
      token
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ msg: 'Server error' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // Token expiration time
    );

    res.status(200).json({
      msg: 'Login successful',
      id: user._id,
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = {
  signup,
  login
};
