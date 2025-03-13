import React from "react";
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn, FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-300 py-8 overflow-hidden">
      {/* Glowing Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glassmorphism Background */}
        <div className="relative bg-white/5 backdrop-blur-0 md:backdrop-blur-md rounded-lg p-6 shadow-lg">
          {/* Grid for Columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Small empty space column */}
            <div className="hidden md:block md:col-span-1"></div>
            
            {/* Logo Section */}
            <div className="flex flex-col items-center md:items-start md:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Believe K.
              </h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed text-center md:text-left">
                A creative frontend developer dedicated to crafting visually stunning and highly functional user experiences.
              </p>
            </div>
            
            {/* Medium empty space column */}
            <div className="hidden md:block md:col-span-2"></div>
            
            {/* Contact & Social Media Section */}
            <div className="flex flex-col items-center md:items-start md:col-span-4">
              {/* Contact Us Section */}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Contact Us</h3>
              <ul className="space-y-1 mb-4">
                <li className="flex items-center text-sm sm:text-base text-gray-400">
                  <FaEnvelope className="mr-2 text-blue-400" size={14} />
                  <a href="mailto:believeserwaaa80@gmail.com" className="hover:text-white transition">
                    believeserwaaa80@gmail.com
                  </a>
                </li>
                <li className="flex items-center text-sm sm:text-base text-gray-400">
                  <FaPhone className="mr-2 text-blue-400" size={14} />
                  <a href="tel:+233247827902" className="hover:text-white transition">
                    +233247827902
                  </a>
                </li>
                <li className="flex items-center text-sm sm:text-base text-gray-400">
                  <FaMapMarkerAlt className="mr-2 text-blue-400" size={14} />
                  <span>Accra, Ghana</span>
                </li>
              </ul>
              
              {/* Stay Connected Section */}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Stay Connected</h3>
              <div className="flex space-x-3">
                {[
                  { href: "https://twitter.com/@Ama_sewa", icon: <FaTwitter size={16} />, color: "hover:text-blue-400" },
                  { href: "https://facebook.com/believe.Ama", icon: <FaFacebookF size={16} />, color: "hover:text-blue-400" },
                  { href: "https://github.com/Believe-Serwaa", icon: <FaGithub size={16} />, color: "hover:text-blue-400" },
                  { href: "https://linkedin.com/in/believe-kwamitse", icon: <FaLinkedinIn size={16} />, color: "hover:text-blue-400" },
                ].map(({ href, icon, color }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className={`p-2 rounded-full bg-gray-800 transition ${color}`}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Small empty space column */}
            <div className="hidden md:block md:col-span-1"></div>
          </div>
          
          {/* Copyright Section */}
          <div className="border-t border-gray-700 mt-6 pt-4 text-center">
            <p className="text-sm sm:text-base">
              &copy; {new Date().getFullYear()} Believe K. All rights reserved.
            </p>
            <p className="text-sm sm:text-base mt-1">
              Built with <FaHeart className="inline text-red-500" size={12} />.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;