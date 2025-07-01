import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.E. Electronics & Communication Engineering',
      college: 'Panimalar Engineering College, Chennai',
      year: '2021 – 2025',
      score: '7.5 CGPA',
      desc: 'Studied embedded systems, signal processing, VLSI, and microcontrollers. Built multiple hardware-software integrated projects and completed internships in core + software domains.',
      tags: ['Embedded Systems', 'VLSI', 'Signal Processing', 'IoT', 'Java', 'DSA'],
    },
    {
      degree: 'HSC – Higher Secondary Education',
      college: 'Velammal Matriculation Hr Sec School',
      year: '2019 – 2021',
      score: '91.5%',
      desc: 'Major in Mathematics, Physics & Computer Science. Built strong fundamentals in logic, programming and problem-solving.',
      tags: ['Maths', 'Physics', 'Computer Science'],
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-slate-900 via-pink-950/20 to-black text-white"
    >
      <div className="section-container px-4 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="gradient-text">Education</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/40 backdrop-blur-md border border-pink-400/20 rounded-xl p-6 shadow-md hover:shadow-pink-500/30 transition-all"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-pink-500" />
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
                  <span
                    key={idx}
                    className="text-xs bg-slate-800 text-pink-300 px-3 py-1 rounded-full border border-pink-400/30 hover:bg-pink-800/20 transition"
                  >
                    {tag}
                  </span>
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
