import React from "react";

const About: React.FC = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center bg-gray-100 p-10">
      {/* Image Section */}
      <div className="w-60 h-60 md:w-80 md:h-80 mb-6 md:mb-0 md:mr-10">
        <img 
          src="./Profile.jpg"   
          alt="Ajeet Raghuvanshi" 
          className="w-full h-full object-cover rounded-full shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-3xl">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">About Me</h2>
        <p className="text-xl text-gray-700">
          I am a passionate <span className="font-semibold text-blue-600">Data Scientist</span> and <span className="font-semibold text-blue-600">Software Developer</span> with a strong foundation in 
          Machine Learning, Predictive Analytics, SQL, and Data Visualization. Currently pursuing my Master’s in Data Science, I am passionate about 
          transforming complex data into actionable insights, driving innovation, and optimizing decision-making through advanced analytical techniques.
        </p>
      </div>
    </div>
  );
};

export default About;
