const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/auth');
const syllabusRoutes = require('./src/routes/syllabus');


// Load environment variables 
dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}));
app.use(bodyParser.json());

// Test endpoint
app.get('/data', (req, res) => {
    res.send("server is working");
});

// API routes
app.use('/api', authRoutes);
app.use('/api', syllabusRoutes);

// Database connection
require('./src/config/db');

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
