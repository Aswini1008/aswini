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
    <section id="about" className="py-20 bg-gradient-to-b from-black via-pink-950/30 to-slate-900 text-white">
      <div className="section-container px-4 max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 glow-hover"
        >
          <span className="text-pink-400">About Me</span>
        </motion.h2>

        {/* Layout Wrapper */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* LEFT COLUMN – Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <p className="text-lg text-pink-100 leading-relaxed">
              I'm an enthusiastic full-stack development intern passionate about creating clean and scalable web applications. I love turning creative ideas into interactive digital products.
            </p>

            <p className="text-lg text-pink-100 leading-relaxed">
              I’m gaining real-world experience via internships and collaborative projects. My core stack includes React for UI, Java for backend logic, and Git/GitHub for version control.
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              {/* Projects */}
              <div className="bg-slate-800/50 p-5 rounded-xl text-center hover:shadow-xl transition">
                <div className="text-3xl font-bold text-pink-400">4+</div>
                <p className="text-sm mt-1 text-pink-100">Projects Built</p>
              </div>

              {/* Internships */}
              <div className="bg-slate-800/50 p-5 rounded-xl text-center hover:shadow-xl transition">
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

          {/* RIGHT COLUMN – Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full lg:w-[40%]"
          >
            <div className="bg-slate-800/40 rounded-2xl p-6 shadow-md hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-4 text-pink-300">Quick Facts</h3>
              <ul className="space-y-5 text-pink-100">
                <li className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-pink-400" />
                  B.E in ECE – Panimalar Engineering College
                </li>
                <li className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-pink-400" />
                  Full Stack & Software Development Internships
                </li>
                <li className="flex items-center gap-3">
                  <Laptop2 className="w-5 h-5 text-pink-400" />
                  React, Java, GitHub, Tailwind Enthusiast
                </li>
                <li className="flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-pink-400" />
                  Passionate about Real-world Problem Solving
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
