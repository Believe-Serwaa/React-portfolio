import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  // Animation variants for elements
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  // Skill data
  const skills = [
    { name: "HTML", level: "75%" },
    { name: "CSS", level: "65%" },
    { name: "JavaScript", level: "70%" },
    { name: "React", level: "80%" },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 bg-gray-900 text-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            About 
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-2"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-12">
          {/* Image Column */}
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/ama.jpg"
              alt="About Image"
              className="rounded-lg shadow-lg w-full h-auto max-w-md object-cover"
            />
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col justify-center"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            {/* About Me Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
              className="text-center md:text-left mb-6"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Who I Am</h3>
              <div className="w-16 h-1 bg-blue-400 mx-auto md:mx-0 mb-3"></div>
            </motion.div>

            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-300">
              I'm a passionate and dedicated individual with a strong drive for
              personal and professional growth. With a background in computer
              science, I bring creativity, enthusiasm, and a solution-oriented
              mindset to everything I do.
            </p>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-300">
              I thrive in collaborative environments where I can work with diverse
              teams, tackle new challenges, and continuously expand my knowledge.
              Outside of work, I engage in reading and exploring digital content to
              stay informed, inspired, and continuously broaden my perspective.
            </p>

            {/* Skills Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
              className="text-center md:text-left mb-6"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white">My Skills</h3>
              <div className="w-16 h-1 bg-blue-400 mx-auto md:mx-0 mb-3"></div>
            </motion.div>

            <div className="space-y-3 sm:space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.3, duration: 0.8 }}
                >
                  <div className="flex justify-between text-sm sm:text-base text-gray-300">
                    <p>{skill.name}</p>
                    <p>{skill.level}</p>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className="bg-blue-400 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.5, delay: index * 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
