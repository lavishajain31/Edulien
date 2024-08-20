import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaStickyNote, FaList, FaUsers, FaArrowRight } from 'react-icons/fa';
import Header from '../components/Header';
import bg from '../Assets/bg.mp4';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Timeline from '../components/Timeline';
import UpcomingEvents from '../components/UpcomingEvents';
const Home = () => {
  return (
    <div className="min-h-screen bg-light-bg text-gray-800 font-poppins">
      <Header />
      
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
    

<section className=" min-h-screen py-24">
  <div className="relative max-w-5xl mx-auto flex flex-col items-center">
  <Timeline/>
  </div>
</section>


      {/* Testimonials Section */}
    <Testimonials/>

      {/* Upcoming Events Section */}
      {/* <section className="p-12 bg-light-bg text-center">
        <h2 className="text-3xl font-semibold mb-4">Upcoming Events</h2>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-2">Campus Webinar</h3>
          <p className="mb-4">Join us for an informative webinar on academic success strategies.</p>
          <Link to="/events" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">Learn More</Link>
        </div>
      </section> */}
      <UpcomingEvents/>
      
      <Footer/>
    </div>
  );
};

export default Home;
