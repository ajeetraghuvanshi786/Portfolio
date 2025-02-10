import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-r from-blue-900 via-purple-800 to-gray-900">
      <motion.h1 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.1, textShadow: "0px 0px 20px rgba(255,255,255,0.8)" }}
      >
        AJEET RAGHUVANSHI
      </motion.h1>

      <motion.p 
        className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-4 font-semibold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Data Scientist | Machine Learning Enthusiast | Software Developer
      </motion.p>
    </div>
  );
};

export default Home;
