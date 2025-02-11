import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Importing official icons

const contactIcons = [
  { icon: <FaEnvelope className="text-5xl text-gray-800" />, link: "mailto:dsajeet2024@gmail.com" },
  { icon: <FaLinkedin className="text-5xl text-blue-600" />, link: "https://linkedin.com/in/ajeet-raghuvanshi-579725327" },
  { icon: <FaGithub className="text-5xl text-gray-900" />, link: "https://github.com/ajeetraghuvanshi786" },
];

const iconVariants = {
  hover: { scale: 1.2, transition: { duration: 0.3 } }
};

const Contact: React.FC = () => {
  return (
    <motion.div
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center p-10 bg-gradient-to-br from-[#F7F7F7] to-[#EAEAEA] text-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-5xl font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Icons */}
      <motion.div className="flex space-x-12">
        {contactIcons.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-full bg-white shadow-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-2xl flex items-center justify-center"
            variants={iconVariants}
            whileHover="hover"
          >
            {contact.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Contact;
