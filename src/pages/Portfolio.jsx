import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    image: "/buk.webp",
    link: "https://believe-serwaa.github.io/My-Portfolio/",
  },
  {
    title: "CodeConnect Website",
    image: "./images/code.png",
    link: "https://devs4change.netlify.app",
  },
  {
    title: "Movie Search Website",
    image: "/movie.png",
    link: "https://believe-serwaa.github.io/Movie-app/",
  },
  {
    title: "Book Management Website",
    image: "/book.png",
    link: "https://bukvault.netlify.app/",
  },
];

const Portfolio = () => {
  // Animation variants for the portfolio cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="portfolio" className="py-12 bg-gray-900 text-center scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            Portfolio
          </h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto mb-3"></div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
                {/* RGBA Transparent Overlay with inline styles */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  <span className="text-white text-lg font-semibold">
                    {project.title}
                  </span>
                  <FaExternalLinkAlt className="text-white ml-2" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;