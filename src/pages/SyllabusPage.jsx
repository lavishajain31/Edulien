// src/pages/SyllabusPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateSyllabusForm from '../components/CreateSyllabusForm';
import SyllabusList from '../components/SyllabusList';
import { FcSearch } from "react-icons/fc";

const SyllabusPage = () => {
  const [syllabuses, setSyllabuses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('BTech');

  useEffect(() => {
    const fetchSyllabuses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/syllabus');
        setSyllabuses(response.data);
      } catch (error) {
        console.error('Error fetching syllabuses:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSyllabuses();
  }, []);

  const handleSyllabusCreated = (newSyllabus) => {
    setSyllabuses([...syllabuses, newSyllabus]);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredSyllabuses = syllabuses.filter((syllabus) =>
    syllabus.courseTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <div  className="w-1/5 bg-gray-800 p-4 shadow-lg" style={{ position: 'sticky', top: 0 }}>
        <div className="mb-4">
          <button
            onClick={() => setActiveTab('BTech')}
            className={`block w-full text-left p-2 rounded ${
              activeTab === 'BTech' ? 'bg-blue-500 text-white' : ''
            }`}
          >
            BTech
          </button>
          <button
            onClick={() => setActiveTab('MCA')}
            className={`block w-full text-left p-2 rounded ${
              activeTab === 'MCA' ? 'bg-blue-500 text-white' : ''
            }`}
          >
            MCA
          </button>
        </div>
      </div>
      <div className="w-4/5 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-4">Syllabus</h1>
        <div className="mb-8">
          <CreateSyllabusForm onSyllabusCreated={handleSyllabusCreated} />
        </div>
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-[50%] p-2 border rounded bg-black"
          /> 
          <FcSearch className='absolute left-[45%] top-2 text-2xl' />

        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">{activeTab} Syllabus</h2>
          <SyllabusList syllabuses={filteredSyllabuses} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default SyllabusPage;
