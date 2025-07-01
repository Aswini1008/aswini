import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Laptop2,
  Code2,
  Award,
} from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black via-pink-950/20 to-slate-900 text-white"
    >
      <div className="section-container px-4 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="gradient-text">About Me</span>
        </motion.h2>

        {/* Flex Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* LEFT: Bio & Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-lg text-pink-100 mb-5 leading-relaxed">
              I'm a passionate Full-Stack Developer skilled in crafting scalable, modern web apps.
              With hands-on internship experience and real-world projects, I enjoy building things that make a difference.
            </p>

            <p className="text-lg text-pink-100 mb-8 leading-relaxed">
              I specialize in React, Java, and RESTful services. Clean UI, reusable components, and smooth user experience are at the heart of my work.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/60 p-6 rounded-xl text-center shadow hover:shadow-xl transition">
                <h3 className="text-3xl font-bold text-pink-400">4+</h3>
                <p className="text-sm mt-1 text-pink-100">Projects Built</p>
              </div>

              <div className="bg-slate-800/60 p-6 rounded-xl text-center shadow hover:shadow-xl transition">
                <div className="flex justify-center mb-2">
                  <Award className="w-6 h-6 text-pink-300" />
                </div>
                <p className="text-base font-medium text-pink-200">
                  Completed 3 Internships
                </p>
                <p className="text-xs text-pink-100">ICF, Test Yatra, BSNL</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full lg:w-[40%]"
          >
            <div className="bg-slate-800/40 rounded-2xl p-6 shadow-md hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-4 text-pink-300">
                Quick Facts
              </h3>
              <ul className="space-y-5 text-pink-100">
                <li className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-pink-400" />
                  B.E in ECE – Panimalar Engineering College
                </li>
                <li className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-pink-400" />
                  Interned at ICF, Test Yatra, and BSNL
                </li>
                <li className="flex items-center gap-3">
                  <Laptop2 className="w-5 h-5 text-pink-400" />
                  Tech Stack: React, Java, Git, MongoDB, Tailwind CSS
                </li>
                <li className="flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-pink-400" />
                  Loves Solving Real-world Problems with Code
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
