import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
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
    <section id="experience" className="py-24 px-4 md:px-10 bg-gradient-to-b from-slate-900 via-black to-pink-950 text-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-bold inline-flex items-center justify-center gap-3 text-pink-500">
          Experience
        </h2>
      </motion.div>

      {/* Experience Cards */}
      <div className="max-w-5xl mx-auto space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800/60 border border-pink-900/40 rounded-2xl p-6 shadow-lg hover:shadow-pink-800/40 transition-all"
          >
            <div className="mb-2">
              <h3 className="text-xl font-semibold text-pink-400">{exp.company}</h3>
              <span className="text-sm text-pink-200">{exp.period}</span>
            </div>

            <h4 className="text-lg font-medium text-white mb-2">{exp.position}</h4>
            <p className="text-pink-100 text-sm leading-relaxed mb-4">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-pink-900/40 text-pink-300 px-3 py-1 rounded-full border border-pink-600/20"
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
