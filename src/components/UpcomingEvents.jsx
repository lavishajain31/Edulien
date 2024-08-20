import 'tailwindcss/tailwind.css';
import eventImage1 from '../Assets/medi.png';
import eventImage2 from '../Assets/medi2.png';
import eventImage3 from '../Assets/medi3.png';

const UpcomingEvents = () => {
  return (
    <section className="p-12  text-center">
      <h2 className="text-3xl font-semibold mb-8">Events Updates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Event 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 flex flex-col">
          <img src={eventImage1} alt="Event 1" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <div className="flex-grow">
            <h3 className="text-xl font-semibold mb-2">Induction Program</h3>
            <p className="text-gray-700 mb-4 line-clamp-5">Thrilled to welcome our new faculty members! Join us for the Faculty Orientation Program on 13th-14th August 2024. This is the first step in your journey with us, filled with insights, inspiration, and collaboration. We look forward to your valuable contribution!</p>
          </div>
          <button className="mt-auto p-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out">
            Learn More
          </button>
        </div>

        {/* Event 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 flex flex-col">
          <img src={eventImage2} alt="Event 2" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <div className="flex-grow">
            <h3 className="text-xl font-semibold mb-2">Global Peace Summit</h3>
            <p className="text-gray-700 mb-4 line-clamp-5">Medicaps University inaugurated the Global Peace & Sustainable Development Summit 2024, with 17 days of discussions on building a better future. Distinguished guests Dr. Sonal Sisodia and Mr. Sumant Chinchwadkar led the event. Global experts discussed SDG-1 (No Poverty), aiming to eradicate poverty and promote sustainability worldwide.</p>
          </div>
          <button className="mt-auto p-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out">
            Learn More
          </button>
        </div>

        {/* Event 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 flex flex-col">
          <img src={eventImage3} alt="Event 3" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <div className="flex-grow">
            <h3 className="text-xl font-semibold mb-2">MU-SAT Mock Test</h3>
            <p className="text-gray-700 mb-4 line-clamp-5">Prepare for success with MU-SAT! Join us for Phase 3 Mock Tests on July 26, 2024, followed by the Final Tests on July 27 and 28, 2024. Secure your spot for admissions and stand a chance to earn up to a 100% scholarship. The exam will be conducted online, making it accessible from anywhere.</p>
          </div>
          <button className="mt-auto p-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out">
            Learn More
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default UpcomingEvents;
