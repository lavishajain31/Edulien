// const express = require('express');
// const sequelize = require('./config/db')
// const userRoutes = require('./routes/auth'); // Import your route file

// const app = express();

// // Middleware to parse JSON request bodies
// app.use(express.json());

// // Use the user routes
// app.use('/api', userRoutes);

// // Sync the database
// sequelize.sync({ alter: true }) // Use { alter: true } to update the schema without dropping tables
//   .then(() => {
//     console.log('Database synced');
//   })
//   .catch((err) => {
//     console.error('Database sync failed:', err);
//   });

// // Basic error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./src/controllers/User');
const userRoutes = require('./src/routes/auth');
const authenticateJWT = require('./src/middleware/auth');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// Auth Routes
app.use('/api', userRoutes);

// Protected Routes (Example)
// app.get('/protected', authenticateJWT, (req, res) => {
//   res.json({ message: 'This is a protected route' });
// });

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
