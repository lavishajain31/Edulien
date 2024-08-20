import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Using Edulien, I've found it easier to collaborate with classmates and stay updated on course materials. It’s a must-have for any student.",
    author: "Muneera Arif",
    color: "bg-purple-400"
  },
  {
    quote: "Edulien has been a game-changer for our campus community. The ability to connect and share resources has made a huge difference in our academic experience.",
    author: "Mahaveer Jain",
    color: "bg-indigo-400"
  },
  
  {
    quote:"Edulien's user-friendly interface and powerful features have significantly enhanced my study habits. I can't imagine my academic life without it!",
    author: "Kushal Rathore",
    color: "bg-purple-400"
  },
  {
    quote: "Edulien's features are perfect for managing study groups and sharing notes. It’s become an integral part of my academic life.",
    author: "Kratgya  Sharma",
    color: "bg-indigo-400"
  },
  {
    quote: "The user-friendly interface of Edulien makes it easy to share academic resources and connect with fellow students.",
    author: "Gauri Panchal",
   color: "bg-purple-400"
  }
];

const Testimonial = ({ quote, author, color, isActive }) => {
  return (
    <div className={`relative max-w-xs mx-4 my-8 text-center flex-shrink-0 ${isActive ? 'opacity-100 transform scale-105' : 'opacity-50'}`}>
      <div className={`relative ${isActive ? color : 'bg-gray-300'} text-white p-8 rounded-lg shadow-lg transition-transform duration-500`}>
        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-5 w-10 h-10 ${isActive ? color : 'bg-gray-300'} flex items-center justify-center text-3xl rounded-full`}>
          “
        </div>
        <p className="text-lg mb-4">“{quote}”</p>
        <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 ${isActive ? color : 'bg-gray-300'} rotate-45`}></div>
      </div>
      <div className="flex flex-col items-center mt-8">
        {/* <img src={imgSrc} alt={author} className="w-16 h-16 rounded-full mb-2" /> */}
        <p className="font-bold">{author}</p>
        {/* <p className="text-sm text-gray-600">{authorTitle}</p> */}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index) => {
    setIndex(index);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center py-10">
      <h1 className="text-4xl font-bold mb-8">What Our Users Say</h1>
      <div className="relative flex items-center justify-center w-full overflow-hidden">
        <button onClick={prevTestimonial} className="absolute left-0 p-2 text-white bg-blue-600 rounded-full">
          &#10094;
        </button>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * (100 / testimonials.length)}%)` }}
        >
          {testimonials.map((testimonial, i) => (
            <Testimonial
              key={i}
              quote={testimonial.quote}
              author={testimonial.author}
              authorTitle={testimonial.authorTitle}
              imgSrc={testimonial.imgSrc}
              color={testimonial.color}
              isActive={i === index}
            />
          ))}
        </div>
        <button onClick={nextTestimonial} className="absolute right-0 p-2 text-white bg-blue-600 rounded-full">
          &#10095;
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goToTestimonial(i)}
            className={`mx-2 w-4 h-4 rounded-full ${i === index ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
