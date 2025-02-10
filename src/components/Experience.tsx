import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Virtusa Consulting Service Pvt. Ltd.",
    role: "Engineer – Technology",
    duration: "April 2021 – May 2024",
    achievements: [
      "Boosted API efficiency by 60% and mentored developers, leading to a 70% increase in team productivity.",
      "Streamlined 30+ API workflows, reducing data retrieval time by 60% and ensuring uninterrupted performance.",
      "Led CI/CD pipeline implementation, cutting deployment time by 50% and enabling quicker product releases.",
      "Optimized database queries, reducing operational costs by 20% and improving response times under heavy traffic.",
      "Spearheaded feature rollouts that increased user engagement by 40%, contributing to a 15% revenue growth.",
      "Designed data-driven marketing strategies, leading to a 25% boost in client acquisition rates."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <div id="experience" className="min-h-screen flex flex-col justify-center items-center text-center p-10 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] text-white">
      <h2 className="text-5xl font-bold text-[#faf8f8] mb-10">Experience</h2>
      <motion.div
        className="w-full max-w-5xl space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="p-8 bg-[#1E2A47] rounded-xl shadow-lg shadow-[#FFD700]/50 border-l-4 border-[#FFD700] transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFD700]/80 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.7, type: "spring", stiffness: 100 }}
          >
            <h3 className="text-3xl font-semibold text-[#FFD700]">{exp.company}</h3>
            <p className="text-lg font-medium text-gray-300">{exp.role} ({exp.duration})</p>
            <ul className="text-gray-300 text-left mt-4 space-y-3">
              {exp.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * i, duration: 0.5 }}
                  className="mb-2 flex items-center"
                >
                  <span className="text-[#FFD700] text-xl mr-2">✔</span> {achievement}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export { Experience };
