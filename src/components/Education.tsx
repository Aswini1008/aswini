import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: 'B.E. Electronics & Communication Engineering',
      college: 'Panimalar Engineering College, Chennai',
      year: '2023 – 2027',
      score: '8.6 CGPA',
      desc: 'Studied embedded systems, signal processing, VLSI, and microcontrollers. Built multiple hardware-software integrated projects and completed internships in core + software domains.',
      tags: ['Embedded Systems', 'VLSI', 'Signal Processing', 'IoT', 'Java', 'DSA'],
    },
    {
      degree: 'HSC – Higher Secondary Education',
      college: 'Holy Infant  Matriculation Hr Sec School',
      year: '2022 – 2023',
      score: '88%',
      desc: 'Major in Mathematics, Physics & Computer Science. Built strong fundamentals in logic, programming and problem-solving.',
      tags: ['Maths', 'Physics', 'Chemistry'],
    },
  ];

  return (
    <section
      ref={ref}
      id="education"
      className="py-20 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 text-white"
    >
      <div className="section-container px-4 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="gradient-text">Education</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.3 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-slate-800/40 backdrop-blur-md border border-pink-400/20 rounded-xl p-6 shadow-md hover:shadow-pink-500/30 transition-all"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  <GraduationCap className="w-6 h-6 text-pink-500" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white">
                  {edu.degree}
                </h3>
              </div>

              {/* College Info */}
              <p className="text-pink-300 font-medium">{edu.college}</p>
              <div className="text-sm text-slate-400 mb-2">{edu.year}</div>
              <div className="text-sm text-slate-300 mb-4">
                <span className="font-semibold text-slate-200">Score:</span>{' '}
                {edu.score}
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {edu.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {edu.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.6 + i * 0.3 + idx * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs bg-slate-800 text-pink-300 px-3 py-1 rounded-full border border-pink-400/30 hover:bg-pink-800/20 transition"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
