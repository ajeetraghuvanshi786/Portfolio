import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "SQL & PL/SQL", icon: "💾" },
  { name: "Machine Learning", icon: "🤖" },
  { name: "Data Visualization", icon: "📊" },
  { name: "Spring Boot & Hibernate", icon: "🚀" },
  { name: "Data Analytics & Statistics", icon: "📈" },
  { name: "Debugging & Optimization", icon: "🛠️" },
  { name: "End-to-End Development", icon: "🔗" },
  { name: "Cross-Functional Collaboration", icon: "🤝" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.8 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } },
  hover: { scale: 1.15, rotate: 3, transition: { type: "spring", stiffness: 200 } },
};

const Skills: React.FC = () => {
  return (
    <motion.div
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-200 p-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h2 
        className="text-5xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        Skills
      </motion.h2>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4 border border-gray-300"
            variants={skillVariants}
            whileHover="hover"
          >
            <span className="text-6xl">{skill.icon}</span>
            <h3 className="text-2xl font-semibold text-gray-800">{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
