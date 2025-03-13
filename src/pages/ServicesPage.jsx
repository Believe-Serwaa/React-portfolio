import React from "react";
import { motion } from "framer-motion";
import { FaLaptop, FaCode, FaMobileAlt, FaDesktop } from 'react-icons/fa';

const ServicesPage = () => {
  // Animation variants for the service cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } }, // Hover animation
  };

  return (
    <section id="services" className="py-12 sm:py-16 bg-gray-900 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm sm:text-lg text-blue-500 uppercase">What I Do</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400">Awesome Quality Services</h2>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              icon: <FaLaptop className="text-blue-500 text-4xl sm:text-5xl mx-auto mb-4" />,
              title: "Web Design",
              description: "I create visually appealing and user-friendly websites tailored to meet your needs.",
            },
            {
              icon: <FaCode className="text-green-500 text-4xl sm:text-5xl mx-auto mb-4" />,
              title: "Web Development",
              description: "Using HTML, CSS, JavaScript, and modern frameworks, I develop fast and scalable websites.",
            },
            {
              icon: <FaMobileAlt className="text-purple-500 text-4xl sm:text-5xl mx-auto mb-4" />,
              title: "Responsive Web Design",
              description: "I ensure websites are fully responsive and provide a seamless experience across all devices.",
            },
            {
              icon: <FaDesktop className="text-red-500 text-4xl sm:text-5xl mx-auto mb-4" />,
              title: "User Interface (UI) Design",
              description: "Writing clean and efficient code to implement design mockups with cross-browser compatibility.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-4 sm:p-6 text-center hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover" // Apply hover animation
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ rotate: 10 }} // Add a subtle rotation effect to the icon on hover
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;