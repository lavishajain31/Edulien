import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-dark-bg text-white p-6 text-center">
        <p>&copy; {new Date().getFullYear()} Edulien. All rights reservedd.</p>
        <div className="mt-4">
          <Link to="/contact" className="text-primary hover:underline">Contact Us</Link> | 
          <Link to="/privacy" className="text-primary hover:underline"> Privacy Policy</Link> |
          <Link to="/terms" className="text-primary hover:underline"> Terms of Service</Link>
        </div>
        <div className="mt-4">
          <a href="https://twitter.com/yourprofile" className="text-primary hover:underline mx-2">Twitter</a>
          <a href="https://facebook.com/yourprofile" className="text-primary hover:underline mx-2">Facebook</a>
          <a href="https://linkedin.com/in/yourprofile" className="text-primary hover:underline mx-2">LinkedIn</a>
        </div> 
         </footer>
);

export default Footer;
