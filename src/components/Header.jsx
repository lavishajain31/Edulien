import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaStickyNote, FaList, FaUsers } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-dark-bg text-white p-6 flex justify-between items-center shadow-md">
      <h1 className="text-3xl font-bold">Welcome to Edulie!!</h1>
      <div>
        <Link to="" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors mr-4">Contact Us</Link>
        <Link to="" className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-dark transition-colors">Profile</Link>
      </div>
    </header>
  );
};

export default Header;
