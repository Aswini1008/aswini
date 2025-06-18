import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for tag animations (optional enhancement)
const tagContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const tagItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="section-container px-4 sm:px-8 max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-purple-500 mb-6">Education</h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-30"></div>

          {/* Card Content */}
          <div className="relative bg-slate-800/70 border border-slate-600/40 rounded-3xl p-8 shadow-xl backdrop-blur-xl hover:shadow-purple-700/30 transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Icon */}
              <div className="flex-shrink-0 bg-gradient-to-br from-purple-500 to-violet-600 w-16 h-16 rounded-xl flex items-center justify-center shadow-md">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Details */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-1">
                  Bachelor of Engineering in Computer Science and Engineering
                </h3>
                <p className="text-purple-400 text-base font-medium mb-3">
                  Panimalar Engineering College, Chennai
                </p>

                <div className="flex flex-col sm:flex-row sm:justify-between text-slate-400 text-sm mb-4">
                  <span>Graduation Year: 2025</span>
                  <span>
                    <span className="text-slate-300 mr-1">CGPA:</span>
                    <span className="font-bold text-purple-300 text-lg">7.5 / 10</span>
                  </span>
                </div>

                <p className="text-slate-300 mb-4 leading-relaxed text-justify">
                  Specialized in data structures, algorithms, software development, and AI/ML. 
                  Developed full-stack applications, RESTful APIs, and participated in coding contests, 
                  internships, and open-source projects. Strong foundation in system design and modern 
                  web technologies.
                </p>

                {/* Tags */}
                <motion.div
                  variants={tagContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {[
                    'Data Structures',
                    'Algorithms',
                    'Operating Systems',
                    'DBMS',
                    'Web Development',
                    'JavaScript',
                    'React',
                    'Node.js',
                    'Python',
                   
                  ].map((item, idx) => (
                    <motion.span
                      key={idx}
                      variants={tagItem}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-slate-700 text-purple-300 border border-purple-500/40 hover:bg-purple-800/20 transition"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
