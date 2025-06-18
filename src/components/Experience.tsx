import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "TCS iON",
      position: "Intern – Web Security Project",
      period: "Jan – Mar 2025",
      description:
        "Successfully completed a 125-hour remote internship under industry mentorship. Designed and implemented a basic CAPTCHA service to secure a web-based application. Gained practical exposure to web development, human-computer interaction, and security mechanisms.",
      technologies: [
        "HTML/CSS", 
        "JavaScript", 
        "CAPTCHA Security", 
        "HCI Concepts", 
        "Software Documentation"
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 md:px-10 bg-slate-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-bold inline-flex items-center justify-center gap-3 text-purple-500">
          <Briefcase className="w-8 h-8" /> Experience
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-purple-800/40 transition-all"
          >
            <div className="mb-3">
              <h3 className="text-xl font-semibold text-purple-400">{exp.company}</h3>
              <span className="text-sm text-slate-400">{exp.period}</span>
            </div>

            <h4 className="text-lg font-medium text-slate-200 mb-2">{exp.position}</h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">{exp.description}</p>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
