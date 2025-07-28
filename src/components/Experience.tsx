import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Test Yatra Pvt. Ltd",
      position: "Intern – Software Testing & QA",
      period: "Feb – Mar 2025",
      description:
        "Worked on manual and automation testing for web applications. Participated in test case design, bug tracking, and quality assurance processes using real-time project modules. Understood SDLC, STLC, and defect life cycle.",
      technologies: [
        "Manual Testing",
        "Automation",
        "Bug Tracking",
        "SDLC/STLC",
        "Test Case Design",
      ],
    },
    {
      company: "BSNL (Bharat Sanchar Nigam Limited)",
      position: "Intern – Networking & Telecom",
      period: "Sep – Oct 2024",
      description:
        "Learned the core concepts of telecom systems, switching, broadband architecture, and networking protocols through real-time observations at BSNL exchanges.",
      technologies: [
        "Networking",
        "Switching",
        "Broadband",
        "Telecom Infra",
        "Router Configs",
      ],
    },
    {
      company: "ICF (Integral Coach Factory)",
      position: "Intern – Electrical Design",
      period: "May – Jun 2024",
      description:
        "Gained exposure to electric circuit design and wiring mechanisms in train coaches. Assisted in preparing simple electrical layouts and safety documentation.",
      technologies: [
        "Electric Wiring",
        "Rail Coach Design",
        "Circuit Diagrams",
        "Safety Standards",
        "Layout Planning",
      ],
    },
  ];

  return (
    <section
      ref={ref}
      id="experience"
      className="py-20 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 text-white"
    >
      <div className="section-container max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="gradient-text flex items-center justify-center gap-2">
            
            Experience
          </span>
        </motion.h2>

        {/* Timeline Layout */}
        <div className="relative border-l border-pink-500/20 pl-6 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -60, y: 30 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -60, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="relative bg-slate-800/40 border border-pink-500/10 rounded-xl p-6 shadow-md hover:shadow-pink-600/30 transition-all"
            >
              {/* Timeline Dot */}
              <motion.div 
                className="absolute -left-[38px] top-4 w-4 h-4 bg-pink-500 rounded-full border-2 border-white"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.2 }}
              />

              {/* Internship Info */}
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-pink-400">
                  {exp.company}
                </h3>
                <span className="text-sm text-pink-200">{exp.period}</span>
              </div>

              <h4 className="text-lg font-medium text-white mb-2">
                {exp.position}
              </h4>
              <p className="text-sm text-pink-100 leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + i * 0.2 + idx * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs bg-slate-900 text-pink-300 px-3 py-1 rounded-full border border-pink-500/20 hover:bg-pink-700/20 transition"
                  >
                    {tech}
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

export default Experience;
