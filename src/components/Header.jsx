// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="bg-dark-bg text-white p-6 flex justify-between items-center shadow-md">
//       <h1 className="text-3xl font-bold">Welcome to Edulien</h1>
//       <div>
//         <Link to="/contact" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors mr-4">Contact Us</Link>
//         <Link to="" className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-dark transition-colors">Profile</Link>
//         <Link to="" className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-dark transition-colors">Logout</Link>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the authentication token
    localStorage.removeItem('authToken'); // or sessionStorage, cookies, etc.

    // Redirect to the login page
    navigate('/');
  };

  return (
    <header className="bg-dark-bg text-white p-6 flex justify-between items-center shadow-md">
      <h1 className="text-3xl font-bold">Welcome to Edulien</h1>
      <div>
        <Link to="/contact" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors mr-4">
          Contact Us
        </Link>
        <Link to="/profile" className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-dark transition-colors">
          Profile
        </Link>
        <button onClick={handleLogout} className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-dark transition-colors">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
