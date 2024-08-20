import React from 'react';
import 'tailwindcss/tailwind.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'; // Import Link
import team from "../Assets/Team.gif";
import a from "../Assets/a.gif";
import b from "../Assets/b.gif";
import c from "../Assets/c.mp4";

const TimelineSection = ({ title, description, buttonText, imageSrc, videoSrc, reverse, link }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, x: reverse ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const mediaVariants = {
    hidden: { opacity: 0, x: reverse ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center group ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      <motion.div
        className="md:w-1/2 p-4"
        variants={textVariants}
        initial="hidden"
        animate={controls}
      >
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-lg mb-6">{description}</p>
        <Link to={link}>
          <button className="px-6 py-2 font-semibold text-white bg-blue-500 rounded shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
            {buttonText}
          </button>
        </Link>
      </motion.div>
      <motion.div
        className="md:w-1/2 p-4"
        variants={mediaVariants}
        initial="hidden"
        animate={controls}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt={`${title} media`}
            className="w-full h-full object-cover rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        )}
        {videoSrc && (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        )}
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-white">
      <TimelineSection
        title="Blogs"
        description="Share and read blogs to stay updated and engaged with campus life."
        buttonText="Read More"
        imageSrc={a}
        link="/blogs" 
        reverse={false}
      />
      <TimelineSection
        title="Notes"
        description="Upload and find class notes to keep track of your academic progress."
        buttonText="Explore Notes"
        imageSrc={b}
        link="/notes" 
        reverse={true}
      />
      <TimelineSection
        title="Syllabus"
        description="Access and download syllabi to stay on top of your coursework."
        buttonText="View Syllabus"
        imageSrc={team}
        link="/syllabus" 
        reverse={false}
      />
      <TimelineSection
        title="Groups"
        description="Create and join groups to collaborate and connect with peers."
        buttonText="Join Groups"
        videoSrc={c}
        link="/groups" 
        reverse={true}
      />
    </div>
  );
};

export default Timeline;
