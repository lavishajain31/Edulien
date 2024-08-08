import React from 'react';

const SyllabusList = ({ syllabuses, isLoading }) => {
  if (isLoading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Syllabuses</h2>
      <ul className="space-y-4">
        {syllabuses.length > 0 ? (
          syllabuses.map((syllabus) => (
            <li key={syllabus._id} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
              <h3 className="text-xl font-bold">{syllabus.courseTitle}</h3>
              <p className="text-gray-700">{syllabus.description}</p>
              <ul className="list-disc list-inside mt-2">
                {syllabus.topics.map((topic, index) => (
                  <li key={index} className="text-gray-600">{topic}</li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No syllabuses available.</p>
        )}
      </ul>
    </div>
  );
};

export default SyllabusList;
