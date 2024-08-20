import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send form data to an API)
    alert('Form submitted');
  };

  return (
    <section className="bg-cover bg-center h-screen relative top-11" style={{ backgroundImage: "url('/path/to/your/contact.jpg')" }}>
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative z-10 p-6 max-w-3xl mx-auto text-white">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-24">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="flex items-center mb-4">
              <FaPhone className="text-xl mr-3" />
              <p>(91) 456-7890</p>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-xl mr-3" />
              <p>info@edulien.com</p>
            </div>
          </div>
          <div className="md:w-5/6">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 ">
                <label htmlFor="name" className="block text-gray-800 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b text-black border-gray-300 p-2 bg-transparent outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-800 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b text-black border-gray-300 p-2 bg-transparent outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-800 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border-b text-black border-gray-300 p-2 bg-transparent outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-800 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border-b text-black border-gray-300 p-2 bg-transparent outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
