import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaStickyNote, FaList, FaUsers, FaArrowRight } from 'react-icons/fa';
import Header from '../components/Header';
import bg from '../Assets/bg.mp4';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div className="min-h-screen bg-light-bg text-gray-800 font-poppins">
      <Header />
      {/* <section className="relative text-center h-auto p-12 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src={bg} type="video/mp4" alt="video" />
        </video>
        <div className="relative  z-10">
          <h2 className="text-4xl font-semibold mb-4 animate__animated animate__fadeIn">Connect, Share, and Learn</h2>
          <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-1s">Edulien brings students together to share knowledge, collaborate, and excel in their academic journey.</p>
        </div>
      </section> */}
      <section className="relative text-center p-12 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden h-screen">
  {/* Background Video */}
  <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
    <source src={bg} type="video/mp4" />
  </video>
  <div className="relative z-10 flex flex-col justify-center h-full">
    <h2 className="text-4xl font-semibold mb-4 animate__animated animate__fadeIn">Connect, Share, and Learn</h2>
    <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-1s">Edulien brings students together to share knowledge, collaborate, and excel in their academic journey.</p>
  </div>
</section>
      <section className="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-primary-light transition-colors">
          <FaBook className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Blogs</h3>
          <p>Share and read blogs to stay updated and engaged with campus life.</p>
          <Link to="/blogs" className="text-primary hover:underline flex items-center justify-center mt-4">Read More <FaArrowRight className="ml-2" /></Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-primary-light transition-colors">
          <FaStickyNote className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Class Notes</h3>
          <p>Upload and find class notes to keep track of your academic progress.</p>
          <Link to="/notes" className="text-primary hover:underline flex items-center justify-center mt-4">Explore Notes <FaArrowRight className="ml-2" /></Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-primary-light transition-colors">
          <FaList className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Subject Syllabus</h3>
          <p>Access and download syllabi to stay on top of your coursework.</p>
          <Link to="/syllabus" className="text-primary hover:underline flex items-center justify-center mt-4">View Syllabus <FaArrowRight className="ml-2" /></Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-primary-light transition-colors">
          <FaUsers className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Groups</h3>
          <p>Create and join groups to collaborate and connect with peers.</p>
          <Link to="/groups" className="text-primary hover:underline flex items-center justify-center mt-4">Join Groups <FaArrowRight className="ml-2" /></Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="p-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Users Say</h2>
        <div className="flex justify-center space-x-4">
          {/* Add carousel or slider here */}
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <p className="text-lg mb-4">"Edulien has been a game-changer for our campus community. The ability to connect and share resources has made a huge difference in our academic experience."</p>
            <p className="font-semibold">- Alex Johnson</p>
          </div>
          {/* Add more testimonials here */}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="p-12 bg-light-bg text-center">
        <h2 className="text-3xl font-semibold mb-4">Upcoming Events</h2>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-2">Campus Webinar</h3>
          <p className="mb-4">Join us for an informative webinar on academic success strategies.</p>
          <Link to="/events" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">Learn More</Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="p-12 bg-gray-200 text-center">
        <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
        <p className="text-lg mb-8">Sign up for our newsletter to receive the latest updates and news.</p>
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-lg border border-gray-300" />
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary-dark transition-colors">Subscribe</button>
        </form>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
