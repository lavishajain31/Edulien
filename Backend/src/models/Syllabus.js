const mongoose = require('mongoose');

const syllabusSchema = new mongoose.Schema({
  courseTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  topics: {
    type: [String], // Assuming topics is an array of strings
    required: true,
  },
});

const Syllabus = mongoose.model('Syllabus', syllabusSchema);

module.exports = Syllabus;
