// const Syllabus = require('../models/Syllabus');

// const createSyllabus = async (req, res) => {
//   const { courseTitle, description, topics } = req.body;

//   try {
//     const syllabus = new Syllabus({
//       courseTitle,
//       description,
//       topics
//     });

//     await syllabus.save();
//     res.status(201).json({ msg: 'Syllabus created successfully', syllabus });
//   } catch (error) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// };

// const getSyllabuses = async (req, res) => {
//   try {
//     const syllabuses = await Syllabus.find();
//     res.status(200).json(syllabuses);
//   } catch (error) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// };

// module.exports = {
//   createSyllabus,
//   getSyllabuses
// };
const Syllabus = require('../models/Syllabus');

const createSyllabus = async (req, res) => {
  const { courseTitle, description, topics } = req.body;

  try {
    if (!courseTitle || !description || !topics) {
      return res.status(400).json({ msg: 'Please provide all required fields' });
    }

    const syllabus = new Syllabus({
      courseTitle,
      description,
      topics
    });

    await syllabus.save();
    res.status(201).json({ msg: 'Syllabus created successfully', syllabus });
  } catch (error) {
    console.error('Error creating syllabus:', error.message);
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

const getSyllabuses = async (req, res) => {
  try {
    const syllabuses = await Syllabus.find();
    res.status(200).json(syllabuses);
  } catch (error) {
    console.error('Error fetching syllabuses:', error.message);
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

module.exports = {
  createSyllabus,
  getSyllabuses
};
