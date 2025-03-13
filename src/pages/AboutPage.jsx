import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  // Animation variants for the image and text
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  // Skill data
  const skills = [
    { name: "HTML", level: "75%" },
    { name: "CSS", level: "70%" },
    { name: "JavaScript", level: "70%" },
    { name: "React", level: "80%" },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch gap-6 md:gap-8 px-4 sm:px-6 lg:px-8">
        {/* Image Column */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center" // Center the image vertically
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/ama.jpg"
            alt="About Image"
            className="rounded-lg shadow-lg w-full h-full object-cover" // Image takes full height
            style={{ maxHeight: "100%" }} // Ensure the image doesn't overflow
          />
        </motion.div>

        {/* Text Column */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center" // Center text vertically
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-blue-300">About Me</h1>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-300">
            I'm a passionate and dedicated individual with a strong drive for
            personal and professional growth. With a background in computer
            science, I bring creativity, enthusiasm, and a solution-oriented
            mindset to everything I do.
          </p>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-300">
          I thrive in collaborative environments where I can work with diverse teams, tackle new challenges, and continuously expand my knowledge. Outside of work, I engage in reading and exploring digital content to stay informed, inspired, and continuously broaden my perspective.
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-6 mb-4 text-blue-300">Skills</h2>
          <div className="space-y-3 sm:space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.3, duration: 0.8 }} // Adjusted delay and duration
              >
                <div className="flex justify-between text-sm sm:text-base text-gray-300">
                  <p>{skill.name}</p>
                  <p>{skill.level}</p>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className="bg-blue-400 h-2.5 rounded-full"
                    initial={{ width: 0 }} // Start with 0 width
                    whileInView={{ width: skill.level }} // Animate to the actual percentage
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.5, delay: index * 0.3 }} // Slower animation
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;