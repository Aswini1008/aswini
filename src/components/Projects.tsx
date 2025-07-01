import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ISAI – Musical Web App",
      description:
        "Feature-rich music player with admin/user roles. Built with Firebase Auth, Cloudinary uploads, responsive Tailwind UI, and real-time streaming.",
      technologies: ["React.js", "Tailwind CSS", "Firebase", "Cloudinary"],
      image: "/images/music-player.png",
      demoUrl: "https://isai-player.netlify.app",
      codeUrl: "https://github.com/Aswini1008/ISAI-Music-App",
    },
    {
      title: "Church Website – Live Web Application",
      description:
        "Responsive church portal with event announcements, gallery, and admin panel. Media handled via Cloudinary, backend with Node & MongoDB.",
      technologies: ["React.js", "Bootstrap", "Node.js", "MongoDB"],
      image: "/images/church-screenshot.jpg",
      demoUrl: "https://cosmic-squirrel-a9efa8.netlify.app/",
      codeUrl: "https://github.com/aravinthbalu15/panchu"
    },
    // You can include more real projects here…
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore some of the impactful full-stack applications I've developed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="glass-effect rounded-xl overflow-hidden group transition-all duration-300 border border-slate-700 hover:border-pink-500 hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  loading="lazy"
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-100">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-slate-700 text-pink-300 rounded-full border border-pink-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.demoUrl && (
                    <Button
                      size="sm"
                      className="bg-pink-600 hover:bg-pink-700 text-white flex-1"
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.codeUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white text-slate-900 border border-slate-300 hover:bg-pink-50 transition-colors duration-200"
                    >
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
