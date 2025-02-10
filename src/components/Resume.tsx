import React from "react";
import { motion } from "framer-motion";

const Resume: React.FC = () => {
  return (
    <div id="resume" className="min-h-screen flex flex-col justify-center items-center text-center text-white p-10">
      <h2 className="text-5xl font-bold text-[#050505] mb-10">Resume & Presentation</h2>
      <motion.div
        className="w-full max-w-6xl h-[80vh] p-8 rounded-xl shadow-2xl border-l-8 border-[#E67E22] flex justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(230, 126, 34, 0.5)" }}
      >
        {/* Display PPTX from OneDrive - Ensure to replace with your OneDrive embed link */}
        <iframe
        src="https://docs.google.com/presentation/d/1N-bVsvUM4LE6bjb2ytK4nfiJfLmhI2Xp/embed?start=true&loop=true&delayms=3000"
        width="100%"
        height="100%"
        className="w-full h-full"
        title="Presentation"
        allowFullScreen
      ></iframe>
      </motion.div>
      {/* Download Resume Button */}
      <a
        href="/AJEET_RAGHUVANSHI.pdf"
        download
        className="mt-6 px-6 py-3 bg-[#E67E22] text-white font-bold rounded-lg hover:bg-[#D35400] transition duration-300"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
