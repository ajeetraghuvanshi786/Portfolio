import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer"; // Import Footer

const projects = [
  {
    title: "Forex Price Prediction",
    description: [
      "Built a predictive model for Forex prices using XGBoost, achieving 79% accuracy with advanced time series analysis.",
      "Reduced error margins by 25% through hyperparameter tuning and cross-validation.",
      "Generated data visualizations with Matplotlib, helping stakeholders optimize trading strategies."
    ],
    gradient: "bg-gradient-to-r from-blue-500 to-indigo-700",
    shadow: "shadow-lg shadow-blue-500/50"
  },
  {
    title: "Connect Globe",
    description: [
      "Developed a community platform for 500+ users, driving 150+ weekly posts and improving retention rates by 30%.",
      "Engineered secure authentication systems, reducing security incidents by 40% and enhancing platform reliability.",
      "Built an admin dashboard, optimizing content management tasks and reducing completion time by 30%."
    ],
    gradient: "bg-gradient-to-r from-orange-400 to-red-600",
    shadow: "shadow-lg shadow-orange-500/50"
  },
  {
    title: "Credit Card Fraud Detection",
    description: [
      "Developed a classification model to identify fraudulent credit card transactions, achieving 76% precision and 70% recall.",
      "Engineered advanced features to enhance model accuracy and differentiate between legitimate and fraudulent transactions.",
      "Tuned hyperparameters to balance recall and precision, reducing false positives by 20%."
    ],
    gradient: "bg-gradient-to-r from-green-400 to-teal-600",
    shadow: "shadow-lg shadow-green-500/50"
  }
];

// **Animation Variants**
const fadeInUp = {
  hidden: { opacity: 0, y: 100, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const hoverEffect = {
  scale: 1.08,
  rotateX: 5,
  rotateY: 5,
  boxShadow: "0px 20px 40px rgba(0,0,0,0.5)",
  transition: { duration: 0.3 }
};

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 pt-32">
      {/* Page Heading */}
      <motion.h2
        className="text-5xl font-bold text-gray-900 mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Featured Projects
      </motion.h2>

      {/* **Vertical Grid Layout** */}
      <div className="w-full max-w-4xl flex flex-col space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`p-10 rounded-xl text-white ${project.gradient} ${project.shadow} transform transition-all duration-300`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={hoverEffect} // ✅ Fix: Properly applied hover effect
          >
            <h3 className="text-3xl font-bold text-center mb-4">{project.title}</h3>
            <ul className="list-disc pl-6 text-lg">
              {project.description.map((point, i) => (
                <li key={i} className="mb-2">{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* **Full-Width Footer** */}
      <div className="w-full mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
