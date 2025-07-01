import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  LayoutDashboard,
  Server,
  Wrench,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-5 h-5 text-pink-400" />,
      skills: ['Java', 'C', 'Python', 'JavaScript'],
    },
    {
      title: 'Web Technologies',
      icon: <LayoutDashboard className="w-5 h-5 text-pink-400" />,
      skills: ['HTML5', 'CSS3', 'React JS', 'Tailwind CSS'],
    },
    {
      title: 'Backend & Database',
      icon: <Server className="w-5 h-5 text-pink-400" />,
      skills: ['Node.js', 'Express.js', 'MySQL', 'MongoDB'],
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="w-5 h-5 text-pink-400" />,
      skills: ['Git', 'GitHub', 'Netlify', 'Firebase', 'Cloudinary', 'VS Code', 'Figma'],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-slate-900 via-pink-950/20 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Skills</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            My technical stack includes languages, frameworks, tools, and platforms I use to build scalable and efficient applications.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                damping: 20,
                stiffness: 100,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-pink-500/50 p-6 shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-pink-400">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-lg bg-slate-700 text-slate-100 text-sm font-medium border border-slate-600 hover:bg-pink-800/40 hover:border-pink-500 transition-all duration-300"
                  >
                    {skill}
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

export default Skills;
