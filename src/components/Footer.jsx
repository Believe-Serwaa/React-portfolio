import React from "react";
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-300 py-8 overflow-hidden">
      {/* Glowing Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 animate-pulse"></div>
      
      <div className="container mx-auto px-4">
        {/* Glassmorphism Background */}
        <div className="relative bg-white/5 backdrop-blur-md rounded-lg p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">About Me</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                A creative frontend developer passionate about building beautiful and functional digital experiences.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Explore</h3>
              <ul className="space-y-1">
                {["Home", "Projects", "Contact"].map((item, index) => (
                  <li key={index}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Stay Connected</h3>
              <div className="flex space-x-3">
                {[
                  { href: "https://twitter.com/@Ama_sewa", icon: <FaTwitter size={16} />, color: "hover:text-blue-400" },
                  { href: "https://facebook.com/believe.Ama", icon: <FaFacebookF size={16} />, color: "hover:text-blue-600" },
                  { href: "https://github.com/Believe-Serwaa", icon: <FaGithub size={16} />, color: "hover:text-gray-100" },
                  { href: "https://linkedin.com/in/believe-kwamitse", icon: <FaLinkedinIn size={16} />, color: "hover:text-blue-700" },
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
          </div>
          
          {/* Copyright Section */}
          <div className="border-t border-gray-700 mt-6 pt-4 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Believe Kwamitse. All rights reserved.
            </p>
            <p className="text-sm mt-1">
              Built with <FaHeart className="inline text-red-500" size={12} />.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;