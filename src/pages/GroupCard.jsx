import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaInfoCircle } from 'react-icons/fa';

const GroupCard = ({ group }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out w-full max-w-md h-80 flex flex-col justify-between">
      <FaUsers className="text-4xl text-primary mb-4 mx-auto hover:text-secondary transition-colors duration-300" />
      <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
      <p className="mb-4 text-gray-700">{group.description}</p>
      <p className="text-gray-600 mb-4">{group.members} members</p>
      <Link
        to={`/groups/${group.id}`}
        className="text-primary hover:text-secondary hover:underline flex items-center justify-center mt-auto transition-colors duration-300"
      >
        <FaInfoCircle className="mr-2" /> Learn More
      </Link>
    </div>
  );
};

export default GroupCard;
