import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaUsers, FaCalendarAlt, FaRegHandshake } from 'react-icons/fa';

const GroupDetails = () => {
  const { id } = useParams();
  
  // Mock data for demo
  const group = {
    name: 'Study Group A',
    description: 'A group for students studying Computer Science.',
    members: 25,
    activities: ['Homework Discussion', 'Project Collaboration'],
  };

  return (
    <div className="min-h-screen bg-light-bg text-gray-800 font-poppins">
      {/* Header */}
      <header className="bg-dark-bg text-white p-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">{group.name}</h1>
      </header>

      {/* Group Details Section */}
      <section className="p-12 bg-white rounded-lg shadow-md mx-auto max-w-4xl">
        <p className="text-lg mb-4">{group.description}</p>
        <p className="text-gray-600 mb-4">{group.members} members</p>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Activities</h3>
          <ul className="list-disc pl-5">
            {group.activities.map((activity, index) => (
              <li key={index} className="mb-2">{activity}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center gap-4">
          <Link to={`/join-group/${id}`} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">Join Group</Link>
          <Link to="/groups" className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors">Back to Groups</Link>
        </div>
      </section>
    </div>
  );
};

export default GroupDetails;
