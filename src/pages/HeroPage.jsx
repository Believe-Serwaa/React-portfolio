import React from "react";
import { motion } from "framer-motion";

const HeroPage = () => {
  return (
    <section id="home"  className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 bg-gray-900 text-white min-h-screen">
      {/* Text Content */}
      <motion.div
        className="text-center md:text-left md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
          Hello, I’m{" "}
          <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
            Believe Kwamitse
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-6 md:mb-8">
          A junior front-end developer dedicated to building user-friendly and
          visually appealing web interfaces using HTML, CSS, JavaScript, and
          React with a focus on creating responsive components that enhance user
          experience.
        </p>
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>
      </motion.div>

      {/* Image */}
      <motion.div
        className="mt-6 md:mt-0 md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src="/bee.jpg"
          alt="Hero Image"
          className="rounded-full w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover shadow-2xl border-4 border-blue-400 hover:border-blue-300 transition-all duration-300"
        />
      </motion.div>
    </section>
  );
};

export default HeroPage;