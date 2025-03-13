import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: "Message sent successfully!"
    });
    
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: ""
      });
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-10 px-4 sm:px-6 bg-gray-900 text-white scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Contact Me</h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto mb-3"></div>
          <p className="text-gray-300 text-base sm:text-lg"> 
            Have a question or want to work together?
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg"
        >
          {formStatus.submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-2 mb-3 rounded-md bg-blue-400/20 text-blue-200 text-base text-center" 
            >
              {formStatus.message}
            </motion.div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-300 mb-1"> 
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 text-base text-white focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent" 
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-300 mb-1"> 
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 text-base text-white focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent" 
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-300 mb-1"> 
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 text-base text-white focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent resize-none" 
              placeholder="Your message here..."
            ></textarea>
          </div>
          
          <motion.button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium text-base py-2 px-4 rounded shadow-md transition-all duration-300" 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-center text-base" 
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;