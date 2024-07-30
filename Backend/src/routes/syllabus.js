// src/routes/syllabus.js

const express = require('express');
const router = express.Router();

const { createSyllabus, getSyllabuses } = require('../controllers/Syllabus');



router.post('/syllabus', createSyllabus);
router.get('/syllabus', getSyllabuses);

module.exports = router;
