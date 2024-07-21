import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaInfoCircle } from 'react-icons/fa';

const groupsData = [
  {
    id: 1,
    name: 'Study Group A',
    description: 'A group for students studying Computer Science.',
    members: 25,
  },
  {
    id: 2,
    name: 'Math Enthusiasts',
    description: 'Join this group if you love math and solving problems.',
    members: 30,
  },
  {
    id: 3,
    name: 'Science Club',
    description: 'For students interested in science experiments and discussions.',
    members: 20,
  },
  {
    id: 4,
    name: 'Literature Lovers',
    description: 'A group for those who enjoy reading and discussing literature.',
    members: 15,
  },
];

const Groups = () => {
  return (
    <div className="min-h-screen bg-light-bg text-gray-800 font-poppins">
      {/* Header */}
      <header className="bg-dark-bg text-white p-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">Groups</h1>
      </header>

      {/* Groups Section */}
      <section className="p-8 flex flex-col items-center gap-8 w-full max-w-7xl mx-auto">
  {groupsData.map((group) => (
    <div
      key={group.id}
      className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow w-full max-w-md h-80 flex flex-col justify-between"
    >
      <FaUsers className="text-4xl text-primary mb-4 mx-auto" />
      <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
      <p className="mb-4">{group.description}</p>
      <p className="text-gray-600 mb-4">{group.members} members</p>
      <Link
        to={`/groups/${group.id}`}
        className="text-primary hover:underline flex items-center justify-center mt-auto"
      >
        <FaInfoCircle className="mr-2" /> View Details
      </Link>
    </div>
  ))}
</section>

    </div>
  );
};

export default Groups;
