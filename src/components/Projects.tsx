import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack solution with authentication, product management, cart, and Stripe integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://your-ecommerce-demo.netlify.app",
      codeUrl: "https://github.com/yourusername/ecommerce-platform"
    },
    {
      title: "Task Management System",
      description: "Project management tool with real-time updates, drag-and-drop tasks, and team analytics.",
      technologies: ["React", "Spring Boot", "MySQL", "WebSocket", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://your-task-manager.vercel.app",
      codeUrl: "https://github.com/yourusername/task-manager"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Real-time weather forecast dashboard using D3, Flask, and location APIs.",
      technologies: ["React", "D3.js", "Python", "Flask", "Chart.js"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://weather-insights.netlify.app",
      codeUrl: "https://github.com/yourusername/weather-dashboard"
    },
    {
      title: "Social Media Analytics",
      description: "Trends & engagement visualization platform with real-time updates and graphs.",
      technologies: ["React", "Java", "PostgreSQL", "Redis", "Recharts"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://socialmetrics.vercel.app",
      codeUrl: "https://github.com/yourusername/social-media-analytics"
    }
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
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A curated list of my top projects showcasing skills in full-stack development, APIs, and UI design.
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
              className="glass-effect rounded-xl overflow-hidden group transition-all duration-300 border border-slate-700 hover:border-purple-500 hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  loading="lazy"
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
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
                      className="px-3 py-1 text-xs font-medium bg-slate-700 text-purple-300 rounded-full border border-purple-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.demoUrl !== "#" && (
                    <Button
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700 text-white flex-1"
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.codeUrl !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white text-slate-900 border border-slate-300 hover:bg-[#f3e8ff] transition-colors duration-200"
                    >
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Source code of ${project.title} on GitHub`}
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
