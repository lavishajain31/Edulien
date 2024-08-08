import React, { useState } from 'react';
import axios from 'axios';

const CreateSyllabusForm = ({ onSyllabusCreated }) => {
  const [courseTitle, setCourseTitle] = useState('');
  const [description, setDescription] = useState('');
  const [topics, setTopics] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const topicsArray = topics.split(',').map(topic => topic.trim());

    try {
      const response = await axios.post('http://localhost:5000/api/syllabus', {
        courseTitle,
        description,
        topics: topicsArray
      });
      onSyllabusCreated(response.data.syllabus);
      setCourseTitle('');
      setDescription('');
      setTopics('');
    } catch (error) {
      console.error('Error creating syllabus:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Course Title:</label>
        <input
          type="text"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Topics (comma separated):</label>
        <input
          type="text"
          value={topics}
          onChange={(e) => setTopics(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Create Syllabus</button>
    </form>
  );
};

export default CreateSyllabusForm;