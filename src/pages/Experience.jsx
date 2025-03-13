import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  // Animation variants with enhanced effects
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Custom connector line for timeline effect
  const TimelineConnector = () => (
    <div className="absolute h-full w-1 bg-blue-400 left-0 top-0 z-0"></div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-900">
      {/* Experience Section */}
      <section id="experience" className="mb-16 scroll-mt-20 py-12">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <span className="inline-block relative">
            Working Experience
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-400"
              initial={{ width: 0 }}
              whileInView={{ width: "50%" }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </span>
        </motion.h2>

        <motion.div
          className="relative pl-8 max-w-2xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <TimelineConnector />

          {[
            {
              date: "10/2024 - 11/2024",
              role: "Junior Frontend Developer",
              company: "Corextreme Technologies, Remote",
              description:
                "Designed and implemented responsive web interfaces using HTML, Tailwind CSS, and React. Collaborated with the development team to optimize website performance and improve user experience.",
              skills: ["React", "Tailwind CSS", "JavaScript"],
            },
            {
              date: "04/2022 - 09/2023",
              role: "Content Creator",
              company: "Kauri Africa, Remote",
              description:
                "Created engaging digital content by sourcing images, videos, and audio for various platforms. Worked closely with cross-functional teams to align content with brand messaging.",
              skills: ["Content Strategy", "Social Media", "Digital Marketing"],
            },
            {
              date: "09/2020 - 08/2021",
              role: "Service Personnel",
              company: "MASLOC, Ho-Ghana",
              description:
                "Collaborated with team members to complete various tasks and projects. Ensured the proper functioning of computer systems and networks. Accurately entered and maintained client data.",
              skills: ["Data Management", "Administration", "Client Relations"],
            },
            {
              date: "06/2017 - 08/2017",
              role: "Data Entry Clerk (Intern)",
              company: "Ghana Revenue Authority, Ho-Ghana",
              description:
                "Entered and updated tax-related data into the organization's systems. Organized and maintained records of tax payments and receipts.",
              skills: ["Data Entry", "Record Keeping", "Documentation"],
            },
          ].map((job, index) => (
            <motion.div
              key={index}
              className="mb-6 relative"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute -left-8 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-lg z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>

              {/* Content card - narrower design */}
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 p-4 ml-2 hover:ml-4 transform hover:-translate-y-1 w-full">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{job.role}</h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {job.date}
                  </span>
                </div>
                <h4 className="text-gray-700 text-sm font-medium mb-2">
                  {job.company}
                </h4>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {job.description}
                </p>

                {/* Skills tags - more compact layout */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Education Section */}
      <section>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <span className="inline-block relative">
            Education
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-500"
              initial={{ width: 0 }}
              whileInView={{ width: "50%" }} /* Shorter and centered line */
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </span>
        </motion.h2>

        <motion.div
          className="relative pl-8 max-w-2xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute h-full w-1 bg-blue-400 left-0 top-0 z-0"></div>

          {[
            {
              date: "09/2024 - 11/2024",
              degree: "MEST Training Program",
              school: "Accra, Ghana",
              description:
                "Specialized in Front-End Development, gaining expertise in HTML, CSS, JavaScript, and React. Worked on collaborative projects that enhanced my problem-solving skills.",
              focus: ["Front-End", "React", "UI/UX"],
            },
            {
              date: "09/2017 - 06/2020",
              degree: "HND Computer Science",
              school: "Ho Technical University, Ho",
              description:
                "Studied foundational concepts in computer science, gaining exposure to IT fundamentals and general computing practices.",
              focus: ["Computer Science", "Programming", "IT"],
            },
            {
              date: "09/2012 - 06/2015",
              degree: "Senior High School",
              school: "Sokode Secondary School, Sokode",
              description:
                "Majored in Science, focusing on Mathematics, Physics, and Biology with additional studies in Chemistry.",
              focus: ["Science", "Mathematics", "Physics"],
            },
          ].map((edu, index) => (
            <motion.div
              key={index}
              className="mb-6 relative"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute -left-8 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-lg z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>

              {/* Content card - narrower design */}
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 p-4 ml-2 hover:ml-4 transform hover:-translate-y-1 w-full">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">
                    {edu.degree}
                  </h3>
                  <span className="px-2 py-1 bg-green-100 text-blue-800 rounded-full text-xs font-medium">
                    {edu.date}
                  </span>
                </div>
                <h4 className="text-gray-700 text-sm font-medium mb-2">
                  {edu.school}
                </h4>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {edu.description}
                </p>

                {/* Focus areas tags - more compact layout */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {edu.focus.map((item, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Experience;